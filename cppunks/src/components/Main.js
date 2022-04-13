import React from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img
                        className='selectedPunk' 
                        src={activePunk.image_original_url}
                        alt=''
                    />
                </div>
            </div>
            
            <div className='punkDetails' style={{ color: '#fff'}}>
                <div className='title'>
                    {acitvePunk.name}
                </div>
                <span className='itemNumber'>#3</span>
            </div>
            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img 
                        src={''}
                        alt=''
                    />
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div></div>

                            <div className='ownerHandle'>@cleverprogrammer</div>

                            <div className='ownerLink'>
                                <img src={instagramLogo} alt='' />
                            </div>

                            <div className='ownerLink'>
                                <img src={twitterLogo} alt='' />
                            </div>

                            <div className='ownerLink'>
                                <img src={moreIcon} alt='' />
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Main