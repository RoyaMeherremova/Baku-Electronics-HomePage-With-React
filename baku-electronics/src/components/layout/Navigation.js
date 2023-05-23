import React from 'react'
import logo from '../../assets/images/logo.svg'
import { InputGroup, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown, faPhoneVolume, faUser, faHeart, faScaleUnbalancedFlip, faCartShopping } from '@fortawesome/free-solid-svg-icons'
function Navigation() {
    return (
        <div>
            <div className='top-info'>İndi al, 3 ay sonra ödə! Yalnız onlayn!</div>
            <div className='row nav-area '>
                <div className='col-6'>
                    <div className='row nav-area'>
                        <div className='col-5'>
                            <img src={logo} />
                        </div>
                        <div className='col-7'>
                            <div className='input-area'>
                                <input placeholder='Axtarış' />
                                <FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-6'>
                    <div className='row nav-area'>
                        <div className='col-7'>
                            <div className='texts'>
                                <div className='text1'>
                                    <p className='text-danger'>Kampaniyalar</p>
                                    <div className='border'></div>
                                </div>
                                <div className='text2'>
                                    <p>Mağazalar</p>
                                    <div className='border'></div>
                                </div>
                                <div className='text3'>
                                    <div className='icon'>
                                        <p>Digər</p>
                                        <div className='down-icon'>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                    <div className='border'></div>
                                </div>
                                <div className='header-phone'>
                                    <h1>143</h1>
                                    <FontAwesomeIcon icon={faPhoneVolume} />

                                </div>

                            </div>
                        </div>

                        <div className='col-5'>
                                <ul className='icons'>
                                    <li>
                                        <FontAwesomeIcon icon={faUser} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faScaleUnbalancedFlip} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </li>
                                </ul>
                        
                        </div>
                    </div>


                </div>
            </div>

        </div>


    )
}

export default Navigation
