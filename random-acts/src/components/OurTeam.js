import React from 'react';

import './OurTeam.css';
import styled from 'styled-components'

const MainContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 75px;
`;

const TeamDiv = styled.div`
    width: 85%;
    min-height: 500px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(4, 37, 63, 0.9);
    border-radius: 5px;
    box-shadow: 0px 5px 10px 1px;
`;

const CascadeDiv1 = styled.div`
    display: flex;
    width: 20%
    min-height: 400px;
    justify-content: center;
    align-items: center;
    background-color: rgba(5, 18, 41, 0.45);
    border-radius: 20px;
    box-shadow: 0px 5px 10px 1px;
`;

const CascadeDiv2 = styled.div`
    display: flex;
    width: 85%
    min-height: 375px;
    justify-content: center;
    align-items: center;
    background-color: rgba(5, 18, 41, 0.50);
    border-radius: 10px;
    box-shadow: 0px 5px 10px 1px;
`;

const CascadeDiv3 = styled.div`
    display: flex;
    width: 85%
    min-height: 350px;
    justify-content: center;
    align-items: center;
    background-color: rgba(5, 18, 41, 0.75);
    border-radius: 10px;
    box-shadow: 0px 5px 10px 1px;
`;

const MemberDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%
    min-height: 325px;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(5, 18, 41, 1);
    border-radius: 10px;
    color: white;
    box-shadow: 0px 5px 10px 1px black;
`;

const OurTeam = () => {
    return (
        <MainContainer >
            <h1>Our Team</h1>
            <TeamDiv >
                <CascadeDiv1>
                    <CascadeDiv2>
                        <CascadeDiv3>
                            <MemberDiv>
                                Ali Rajaii
                                <a href='https://github.com/rajaii'>Visit my GitHub page!</a>
                            </MemberDiv>
                        </CascadeDiv3>
                    </CascadeDiv2>
                </CascadeDiv1>
                <CascadeDiv1>
                    <CascadeDiv2>
                        <CascadeDiv3>
                            <MemberDiv>
                                Dylan Gosnell
                                <a href='https://github.com/the-best-developer'>Visit my GitHub page!</a>
                            </MemberDiv>
                        </CascadeDiv3>
                    </CascadeDiv2>
                </CascadeDiv1>
                <CascadeDiv1>
                    <CascadeDiv2>
                        <CascadeDiv3>
                            <MemberDiv>
                                Tevvin Strong
                                <a href='https://github.com/TevvinStrong'>Visit my GitHub page!</a>
                            </MemberDiv>
                        </CascadeDiv3>
                    </CascadeDiv2>
                </CascadeDiv1>
                <CascadeDiv1>
                    <CascadeDiv2>
                        <CascadeDiv3>
                            <MemberDiv>
                                Christian Ford
                                <a href='https://github.com/Christian-Ford'>Visit my GitHub page!</a>
                            </MemberDiv>
                        </CascadeDiv3>
                    </CascadeDiv2>
                </CascadeDiv1>
            </TeamDiv>
        </MainContainer>
    )
}

export default OurTeam;