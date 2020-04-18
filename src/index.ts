import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';

const twitter = new ShareButtonTwitter('.btn-twitter', 'https://www.youtube.com/channel/UCYfxHCKSqBMbRqTf8kH9xgA');
twitter.bind();
const facebook = new ShareButtonFacebook('.btn-facebook', 'https://www.youtube.com/channel/UCYfxHCKSqBMbRqTf8kH9xgA');
facebook.bind();
const linkedin = new ShareButtonLinkedin('.btn-linkedin', 'https://www.youtube.com/channel/UCYfxHCKSqBMbRqTf8kH9xgA');
linkedin.bind();
const print = new ShareButtonPrint('.btn-print', 'https://www.youtube.com/channel/UCYfxHCKSqBMbRqTf8kH9xgA');
print.bind();