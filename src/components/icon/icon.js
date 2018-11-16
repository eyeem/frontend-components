/* @flow */
import * as React from 'react';
import styled from 'styled-components';

import { fromInternalTheme } from '../../styleUtils';

import StarIcon from './icons/star';
import Star2Icon from './icons/star2';
import Star3Icon from './icons/star3';
import Star3IconPlus from './icons/star3Plus';
import Star3IconMinus from './icons/star3Minus';
import ImageIcon from './icons/image';
import MailIcon from './icons/mail';
import PhoneIcon from './icons/phone';
import CloseIcon from './icons/close';
import TimingIcon from './icons/timing';
import PrizeIcon from './icons/prize';
import RemoveIcon from './icons/remove';
import AlertIcon from './icons/alert';
import FlagIcon from './icons/flag';
import EmbedIcon from './icons/embed';
import DeleteIcon from './icons/delete';
import BackToTopIcon from './icons/backToTop';
import ContactEyeEmIcon from './icons/contactEyeEm';
import ContactFacebookIcon from './icons/contactFacebook';
import ContactTwitterIcon from './icons/contactTwitter';
import ContactTumblrIcon from './icons/contactTumblr';

import DownloadIcon from './icons/download';
import UploadIcon from './icons/upload';
import CheckmarkIcon from './icons/checkmark';
import CartIcon from './icons/cart';
import CompDownloadIcon from './icons/compDownload';
import AddToLightboxIcon from './icons/addToLightbox';
import IsInLightboxIcon from './icons/isInLightbox';
import LightboxIcon from './icons/lightbox';
import LikeIcon from './icons/like';
import CommentIcon from './icons/comment';
import DragNDrop from './icons/dragndrop';
import ShareIcon from './icons/share';
import EditIcon from './icons/edit';

import FacebookIcon from './icons/facebook';
import DropboxIcon from './icons/dropbox';
import GoogleDriveIcon from './icons/googledrive';
import FlickrIcon from './icons/flickr';
import PicasaIcon from './icons/picasa';
import InstagramIcon from './icons/instagram';
import PaypalIcon from './icons/paypal';

import PlusIcon from './icons/plus';
import LeftArrow from './icons/leftArrow';
import LeftArrow2 from './icons/leftArrow2';
import RightArrow from './icons/rightArrow';
import RightArrow2 from './icons/rightArrow2';
import Terms from './icons/terms';
import Market from './icons/market';
import Growth from './icons/growth';
import EyeEmVision from './icons/eyeEmVision';
import Trophy from './icons/trophy';
import TrophyPlus from './icons/trophyPlus';
import TrophyMinus from './icons/trophyMinus';
import UserFollow from './icons/userFollow';

const icons = {
  star: StarIcon,
  star2: Star2Icon,
  star3: Star3Icon,
  star3Plus: Star3IconPlus,
  star3Minus: Star3IconMinus,
  image: ImageIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  close: CloseIcon,
  timing: TimingIcon,
  prize: PrizeIcon,
  remove: RemoveIcon,
  alert: AlertIcon,
  flag: FlagIcon,
  embed: EmbedIcon,
  delete: DeleteIcon,
  backToTop: BackToTopIcon,
  contactEyeEm: ContactEyeEmIcon,
  contactFacebook: ContactFacebookIcon,
  contactTwitter: ContactTwitterIcon,
  contactTumblr: ContactTumblrIcon,

  cart: CartIcon,
  checkmark: CheckmarkIcon,
  compDownload: CompDownloadIcon,
  download: DownloadIcon,
  upload: UploadIcon,
  edit: EditIcon,
  dragndrop: DragNDrop,
  addToLightbox: AddToLightboxIcon,
  isInLightbox: IsInLightboxIcon,
  lightboxIcon: LightboxIcon,
  like: LikeIcon,
  comment: CommentIcon,
  share: ShareIcon,
  facebook: FacebookIcon,

  dropbox: DropboxIcon,
  googledrive: GoogleDriveIcon,
  flickr: FlickrIcon,
  picasa: PicasaIcon,
  instagram: InstagramIcon,
  paypal: PaypalIcon,

  leftArrow: LeftArrow,
  leftArrow2: LeftArrow2,
  rightArrow: RightArrow,
  rightArrow2: RightArrow2,
  plus: PlusIcon,
  terms: Terms,
  market: Market,
  growth: Growth,
  eyeEmVision: EyeEmVision,
  trophy: Trophy,
  trophyPlus: TrophyPlus,
  trophyMinus: TrophyMinus,

  userFollow: UserFollow
};

function Icon(props: {
  className: string,
  id: string,
  type: string,
  size: number,
  color?: string, // if this is undefined, the icon just inherits the parents' 'fill' CSS property
  iconProps: Object
}) {
  let Component = icons[props.type] || StarIcon;

  if (props.color) {
    Component = styled(Component)`
      fill: ${fromInternalTheme(`colors.${props.color}`)};
    `;
  }

  return (
    <Component
      className={props.className}
      id={props.id}
      size={props.size}
      iconProps={props.iconProps}
    />
  );
}

Icon.defaultProps = {
  color: undefined,
  type: undefined,
  size: 16
};

export default Icon;
