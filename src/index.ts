import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';
import DOMEventHandler from './DOMEventHandler';

const eventHandler = new DOMEventHandler();

const twitter = new ShareButtonTwitter(eventHandler, '.btn-twitter', 'https://www.youtube.com/channel/UCYfxHCKSqBMbRqTf8kH9xgA');
twitter.bind();
const facebook = new ShareButtonFacebook(eventHandler, '.btn-facebook', 'https://www.youtube.com/channel/UCYfxHCKSqBMbRqTf8kH9xgA');
facebook.bind();
const linkedin = new ShareButtonLinkedin(eventHandler, '.btn-linkedin', 'https://www.youtube.com/channel/UCYfxHCKSqBMbRqTf8kH9xgA');
linkedin.bind();
const print = new ShareButtonPrint(eventHandler, '.btn-print');
print.bind();