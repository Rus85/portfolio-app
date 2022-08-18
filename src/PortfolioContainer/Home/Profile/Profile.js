import Typical from 'react-typical'
import './Profile.css'


export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    {/* <div className='colz'>
                        <div className='colz-icon'>
                            <a href='#'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter-square'></i>
                            </a>
                        </div>
                    </div> */}
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {' '}
                            Привет, я <span className='highlighted-text'>Рустам</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {' '}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        'Frontend Dev',
                                        2000,
                                        'JavaScript',
                                        2000,
                                        'React/Redux',
                                        2000,
                                        'HTML/CSS',
                                        2000,
                                        'English: B1',
                                        2000
                                    ]}
                                />
                            </h1>
                            <div className='profile-role-tagline'>
                                <span className=''>
                                    Создаю реактивные WEB приложения
                                </span>
                            </div>
                        </span>
                        <div className='profile-options'>
                            <div>
                                <a href={'https://github.com/Rus85'}>
                                    <button className='btn primary-btn'>GitHub</button>
                                </a>
                            </div>
                            <div>
                                <a href='resume.pdf' download={'Алиев Рустам.pdf'}>
                                    <button className='btn highlighted-btn'>Скачать резюме</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    )
}