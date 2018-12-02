import React, { Component } from 'react';
import { CLOUDINARY_URL } from './config';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './style.css';

const list = [
    { name: `${CLOUDINARY_URL}/HeHe_LOGO_Original_Landscape-small.svg`},
    { name: `${CLOUDINARY_URL}/Landing_artwork.svg` },
    { name: `${CLOUDINARY_URL}/EMS_logo.svg` },
    { name: `${CLOUDINARY_URL}/EMS_logo2.png` },
    { name: `${CLOUDINARY_URL}/HeHe_LOGO_Original_Landscape-small.svg` },
    { name: `${CLOUDINARY_URL}/HeHe_LOGO_Original_Landscape-small.svg` },
    { name: `${CLOUDINARY_URL}/HeHe_LOGO_Original_Landscape-small.svg` },
    { name: `${CLOUDINARY_URL}/HeHe_LOGO_Original_Landscape-small.svg` },
    { name: `${CLOUDINARY_URL}/HeHe_LOGO_Original_Landscape-small.svg` }
];
const MenuItem = ({ text, selected }) => {
    return (
        <div>
            <img src={text} className='menu-item' />
            {/* <Jumbo image={text} addc='menu-item' /> */}
        </div>
    );
};
export const Menu = (list) => list.map(el => {
    const { name } = el;
    return (
        <MenuItem
        text={name}
        key={name}
        />
    );
});


const Arrow = ({ text, className }) => {
    return (
        <div className={className}>{text}</div>
    );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class IpositaLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
        this.renderGetStartedButton = this.renderGetStartedButton.bind(this);
    }
    renderGetStartedButton(loggedIn) {
        if (!loggedIn) {
            const { getStartedButton } = this.props;
            return getStartedButton();
        }

        return <span />;
    }
    onSelect(key){
        this.setState({ selected: key });
    }
    render() {
        const { 
            tableData, 
            loggedIn,
            children
        } =  this.props;
        const { selected } = this.state;
        const menu = Menu(list, selected);
        return (
            <div>
                {/** Header goes here */}
                {children}
                <div className="row reset-row headerRow">
                    <div className="col-md-10 col-sm-12 offset-md-1 landDetails">
                        <div className="row reset-row">
                            <div className="col-md-5 col-sm-12 landDescr">
                                <div className="descTitle">We deliver your Courier</div>
                                <div className="descContentSmall">
                                    for both documents and parcels
                                </div>
                                <div className="descContent">With service levels that meets international standards in speed, reliability, security, accessibility and at affordable prices.</div>
                                <div className="descBtn">{this.renderGetStartedButton(loggedIn)}</div>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                <img src={`${CLOUDINARY_URL}/Landing_artwork.svg`} className='landPic' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row reset-row">
                    <div className="col-lg-8 col-md-10 col-sm-10 col-xs-12 offset-lg-2 offset-md-1 offset-sm-1">
                        <div className="planTitle">Plans</div>
                        <div className="landTable">
                            {tableData}
                        </div>
                    </div>
                </div>
                <div className="row reset-row happyClient">
                    <div className="col-md-8 col-sm-10 col-xs-12 offset-md-2 offset-sm-1">
                        <div className="happyTitle">Happy Clients</div>
                        <div className="App">
                            <ScrollMenu
                            data={menu}
                            arrowLeft={ArrowLeft}
                            arrowRight={ArrowRight}
                            selected={selected}
                            onSelect={this.onSelect}
                            />
                        </div>
                    </div>
                </div>
                <div className="row reset-row">
                    <div className="col-md-10 col-sm-12 offset-md-1 bottomLand">
                        Copyright IPOSITA 2018
                        <div>
                            <a to="/">Terms of Services</a> and <a to="/">Privacy Policies</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default IpositaLanding;


