import React from 'react';
import "./share.css";
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';
const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const GooglePlusIcon = generateShareIcon('google');
const TwitterIcon = generateShareIcon('twitter');

/**
    Share icons with information needed passed as props.
    Url is the website location to share.
    Title is the title of the share.
    Description used to outline your business or interest.
    Size defined in js but centred with margin:5px in css.
*/
export default function Share(props){
    return (
        <div className={"share"}>
            <div className={"share__title"}>
                <span>Share</span>
            </div>
			<FacebookShareButton className={"share__button"} url={props.url} title={props.title} picture={props.picture} >
			    <FacebookIcon size={props.size} round />
			</FacebookShareButton>
			<GooglePlusShareButton className={"share__button"} url={props.url} >
			    <GooglePlusIcon size={props.size} round />
			</GooglePlusShareButton>
			<TwitterShareButton className={"share__button"} url={props.url} title={props.title}>
			    <TwitterIcon size={props.size} round />
	        </TwitterShareButton>
        </div>
    )
}

Share.defaultProps = {
    url:"alexandermorton.co.uk",
    title:"Alexander Morton",
    description:"A web developer based in Glasgow Scotland",
    picture:null,
    size:30
}