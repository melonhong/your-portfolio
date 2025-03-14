const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const env = require("dotenv");

const GOOGLE_CLIENT_ID = env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // 사용자 정보를 데이터베이스에 저장하거나, 세션에 저장하는 부분
      return done(null, profile);
    }
  )
);

// 사용자 정보를 세션에 저장
passport.serializeUser((user, done) => {
  done(null, user);
});

// 세션에서 사용자 정보를 복원
passport.deserializeUser((user, done) => {
  done(null, user);
});
