const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
require("dotenv").config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // 사용자의 정보를 데이터베이스에 저장하거나, 세션에 저장하는 부분
      // 여기에서 사용자의 정보가 데이터베이스에 있는 경우를 가정
      const user = {
        username: profile.name,
        email: profile.emails[0].value,
      };
      return done(null, user);
    }
  )
);

// 사용자 정보를 세션에 저장
passport.serializeUser((user, done) => {
  done(null, {
    username: user.username,
    email: user.email,
  });
});

// 세션에서 사용자 정보를 복원
passport.deserializeUser((user, done) => {
  done(null, user);
});
