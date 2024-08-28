import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { DriverPage, HomePage, QuizPage, RacePage, RegisterPage, TeamPage, RacingGamePage, WithdrawPage} from '../../Pages';
import MainNav from '../shared/MainNav';
import MainFooter from '../shared/MainFooter';
import { DriverProvider } from '../../contexts/DriversContext';
import { TeamProvider } from '../../contexts/TeamContext';
import '../../bootstrap-with-mod-colors.scss';


const RoutingMain = () => {
    return(
        <BrowserRouter>
            <header className='container-fluid px-0'>
                <MainNav/>
            </header>
            <main className='container'>
                <DriverProvider>
                    <TeamProvider>
                       
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/driver" element={<DriverPage />} />
                                <Route path="/teams" element={<TeamPage />} />
                                <Route path="/race" element={<RacePage />} />
                                <Route path="/quiz" element={<QuizPage />} />
                                <Route path="/register" element={<RegisterPage />} />
                                <Route path="/racing" element={<RacingGamePage />} /> 
                                <Route path='/withdraw' element={<WithdrawPage/>}/>
                            </Routes>
                        
                    </TeamProvider>
                </DriverProvider>
            </main>
            <MainFooter/>
        </BrowserRouter>
    )
}

export default RoutingMain;