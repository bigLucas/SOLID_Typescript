import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';

const twitter = new ShareButtonTwitter('.btn-twitter', 'https://www.youtube.com/channel/UCYfxHCKSqBMbRqTf8kH9xgA');
twitter.bind();
const facebook = new ShareButtonFacebook('.btn-facebook', 'https://www.youtube.com/channel/UCYfxHCKSqBMbRqTf8kH9xgA');
facebook.bind();
const linkedin = new ShareButtonLinkedin('.btn-linkedin', 'https://www.youtube.com/channel/UCYfxHCKSqBMbRqTf8kH9xgA');
linkedin.bind();