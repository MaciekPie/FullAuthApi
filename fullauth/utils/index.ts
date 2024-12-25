import continueWithSocialAuth from "./continue_with_social_auth";

export const continueWithGoogle = () => continueWithSocialAuth("google-oauth2", "google");
export const continueWithFacebook = () => continueWithSocialAuth("facebook", "facebook");
