require('dotenv').config();
const UserModel = require('../model/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SERVICESID = "VAd496599616d87e25db4a2f957d099860"
const AccountSID = "AC29a114f949bfb19009d77419bac06b05"
const AuthToken = "2b62a49300c3f52be8b072e43db739ee"
const client = require('twilio')(AccountSID, AuthToken)


//user signup
exports.registration = async (req, res) => {
    try {
        const { name, phone, email, password, interviewer } = req.body;
        if (interviewer) {
            const user = await UserModel.findOne({ email: email })
            if (user) {
                res.send({ message: "User already exists" })
            } else {
                const hashedPw = await bcrypt.hash(password, 12);
                const registerUser = new UserModel({
                    name: req.body.name,
                    phone: req.body.phone,
                    email: req.body.email,
                    password: hashedPw,
                    interviewer: interviewer,
                    experience: req.body.experience
                });
                const user = await registerUser.save();
                res.send({ message: "Interviewer registration successfull", user: user });
            }
        } else {
            const user = await UserModel.findOne({ email: email });
            if (user) {
                res.send({ message: "User already exists" });
            } else {
                const hashedPw = await bcrypt.hash(password, 12);
                const registerUser = new UserModel({
                    name: req.body.name,
                    phone: req.body.phone,
                    email: req.body.email,
                    password: hashedPw,
                    interviewer: interviewer
                });
                const user = await registerUser.save();
                res.send({ message: "User Registered Successfully", user: user });
            }
        }
    } catch (error) {
        res.send(error);
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email })
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            const interviewer = user.interviewer
            if (isMatch) {
                let token;
                if (interviewer) {
                    token = jwt.sign({ _id: this._id, role: 'interviewer' }, process.env.SECRET_KEY);
                } else {
                    token = jwt.sign({ _id: this._id, role: 'user' }, process.env.SECRET_KEY);
                }
                res.cookie("jwtoken", token, {
                    expiresIn: '1h',
                    httpOnly: true
                });
                res.send({ message: "Login Successfull", user: user, token: token })
            } else {
                res.send({ message: "Invalid login details" })
            }
        } else {
            res.send({ message: "User not registered" });
        }
    } catch (error) {
        res.send({ message: "Invalid Credentials", err: error })
    }
}

exports.otpLogin = async (req, res) => {
    try {
        client.verify
            .services(SERVICESID)
            .verifications.create({
                to: `+91${req.body.phone}`,
                channel: 'sms'
            }).then((resp) => {
                res.status(200).send({ data: resp })
            })
    } catch (error) {
        res.send(error)
    }
}

exports.otpVerify = async (req, res) => {
    try {
        const { otp, phone } = req.body
        client.verify
            .services(SERVICESID)
            .verificationChecks.create({
                to: `+91${phone}`,
                code: otp
            }).then((resp) => {
                (async () => {
                    if (resp.valid) {
                        const user = await UserModel.findOne({ phone: phone })
                        if (user) {
                            const interviewer = user.interviewer
                            let token;
                            if (interviewer) {
                                token = jwt.sign({ _id: this._id, role: 'interviewer' }, process.env.SECRET_KEY);
                            } else {
                                token = jwt.sign({ _id: this._id, role: 'user' }, process.env.SECRET_KEY);
                            }
                            res.cookie("jwtoken", token, {
                                expiresIn: '1h',
                                httpOnly: true
                            });
                            res.send({ message: "Login Successfull", user: user, token: token })
                        }
                    } else {
                        res.send({ message: "User not registered" });
                    }
                })()
            })
    } catch (error) {
        res.send( error )
    }
}