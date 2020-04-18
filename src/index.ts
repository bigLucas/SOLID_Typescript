import ShareButton from './ShareButton';

const shareButton = new ShareButton('https://www.youtube.com/channel/UCYfxHCKSqBMbRqTf8kH9xgA');
shareButton.bind('.btn-twitter', 'twitter');
shareButton.bind('.btn-facebook', 'facebook');
shareButton.bind('.btn-linkedin', 'linkedin');