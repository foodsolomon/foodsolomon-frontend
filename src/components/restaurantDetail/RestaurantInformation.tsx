import React from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaStar, FaPen } from 'react-icons/fa';
import { BiCopyAlt, BiLike } from 'react-icons/bi';
import { CgPhone } from 'react-icons/cg';
import { ImLocation } from 'react-icons/im';
import { TiArrowForwardOutline } from 'react-icons/ti';
import { IoIosArrowDown } from 'react-icons/io';

const RestaurantInformationContainer = styled.section`
  width: 1140px;
  /* border: 1px solid red; */
`;

const InformationNavigationBox = styled.div`
  width: 100%;
  height: 88px;
  border-bottom: 2px solid #f35c1b;
  display: flex;
  align-items: flex-end;
  /* border: 1px solid blue; */
`;
const InformationNavigationBar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 56px;
  /* border: 1px solid blue; */
`;

const InformationNavigationBarItems = styled.li`
  /* border: 1px solid greenyellow; */
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #95866c;
  cursor: pointer;
`;
const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 5px solid green; */
`;
const InformationLists = styled.div`
  width: 683px;
  /* border: 3px solid green; */
`;
const InformationAside = styled.aside`
  width: 360px;
  height: 628px;
  background: #fbfaf9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 20%;
`;

const AsideWrapper = styled.div`
  width: 310px;
  height: 568px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AsidePhone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 310px;
  height: 126px;
  color: #413b2d;
  line-height: 20px;
  letter-spacing: -0.02em;
  h4 {
    font-weight: 600;
    font-size: 22px;
  }
  p {
    font-weight: 500;
    font-size: 17px;
  }
`;

const AsideMap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 310px;
  height: 422px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #413b2d;
  h4 {
    font-weight: 600;
    font-size: 22px;
  }
  p {
    font-size: 17px;
    font-weight: 500;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AsideCopyBtn = styled.button`
  width: 136px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 13px;
  gap: 5px;
  background: #f9f8f4;
  border: 2px solid #cfc7ba;
  border-radius: 5px;
`;

const MapBox = styled.div`
  width: 310px;
  height: 296px;
  background: grey;
  border: 2px solid #cfc7ba;
  border-radius: 10px;
`;

const RestaurantIntro = styled.div`
  width: 100%;
  height: 150px;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IntroWrapper = styled.div`
  width: 100%;
  height: 90px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #26211a;
  }
`;

const IntroText = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  p {
    width: 650px;
    height: 54px;
    font-weight: 500;
    font-size: 16px;
    line-height: 170%;
    letter-spacing: -0.02em;
    color: #564e3e;
    word-wrap: break-word;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* border: 1px solid red; */
  }
`;

const ArrowDownIcon = styled(IoIosArrowDown)`
  width: 24px;
  height: 24px;
  /* border: 1px solid red; */
`;

const RestuarantMenuBox = styled.div`
  width: 100%;
  height: 346px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;

const RestaurantMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 286px;
  /* border: 1px solid rebeccapurple; */
  h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #26211a;
  }
`;

const RestaurantMenuWrapper = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: space-between;
`;

const RestaurantMenu = styled.div`
  width: 326.5px;
  height: 230px;

  div {
    background: grey;
    width: 326.5px;
    height: 200px;
    border-radius: 10px;
  }
  p {
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #000000;
  }
`;

const PopularMenu = styled.div`
  width: 100%;
  height: 366px;
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopularMenuContainer = styled.div`
  width: 100%;
  height: 306px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #26211a;
  }
`;

const PopularMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  overflow: hidden;
  /* border: 1px solid blue; */
`;

const PopularMenuCard = styled.div`
  width: 148.25px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PopularMenuImg = styled.div`
  width: 148.25px;
  height: 197px;
  border-radius: 10px;
  background: grey;
`;

const PopularMenuText = styled.div`
  width: fit-content;
  height: 43px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #413b2d;
  }
  p {
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #f35c1b;
  }
`;

const LeaveReviewContainer = styled.div`
  width: 100%;
  height: 171px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
`;

const LeaveReviewButton = styled.button`
  width: 100%;
  height: 71px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  background: #f35c1b;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;
  border: none;
  color: #ffffff;
`;

const ReviewContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #26211a;
  }
`;

const ReviewItemBox = styled.div`
  width: 100%;
  height: 472px;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReviewTitle = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #413b2d;
`;
const ReviewUser = styled.div`
  width: fit-content;
  height: 40px;
  background: #f9f8f4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 13px;
  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #413b2d;
  }
`;

const UserAvatar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  background: grey;
`;

const StarIcon = styled(FaStar)`
  width: 20px;
  height: 20px;
  color: #f0d256;
  margin-left: 5px;
  margin-right: 3px;
`;

const ReviewTitleBox = styled.div`
  width: fit-content;
  height: 86px;
  /* border: 1px solid red; */
`;

const ReviewDescriptionBox = styled.p`
  width: 500px;
  height: 48px;
  overflow: hidden;
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: #564e3e;
  /* border: 1px solid pink; */
`;

const ReviewDetail = styled.div`
  width: 100%;
  height: 386px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ReviewImageWrapper = styled.div`
  width: 100%;
  height: 198px;
`;

const ReviewImageCard = styled.div`
  width: 198px;
  height: 198px;
  background: grey;
  border-radius: 10px;
`;

const ReviewBottomBox = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;

const ReviewLikeBox = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #413b2d;
  span {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #f35c1b;
    margin: 0 3px;
  }
`;
const ReviewOptionBox = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #564e3e;
  p {
    margin-left: 5px;
  }
`;

const MoreReviewButton = styled.p`
  width: fit-content;
  height: 26px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  /* border: 1px solid red; */

  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #564e3e;
`;

function RestaurantInformation() {
  return (
    <RestaurantInformationContainer>
      <InformationNavigationBox>
        <InformationNavigationBar>
          <InformationNavigationBarItems>
            식당소개
          </InformationNavigationBarItems>
          <InformationNavigationBarItems>메뉴판</InformationNavigationBarItems>
          <InformationNavigationBarItems>
            인기메뉴
          </InformationNavigationBarItems>
          <InformationNavigationBarItems>리뷰</InformationNavigationBarItems>
        </InformationNavigationBar>
      </InformationNavigationBox>
      <InformationContainer>
        <InformationLists>
          <RestaurantIntro>
            <IntroWrapper>
              <h3>식당소개</h3>
              <IntroText>
                <p>
                  슬로우캘리는 대한민국 1호 포케전문점입니다! 누구나 건강한
                  음식을 편견 없이 맛있게 먹을 수 있다면 어떨까? 라는 질문
                  속에서 시작되었습니다. 슬로우캘리는 하와이 대표 음식 포케를
                  한국식으로 재해석 하였습니다. 맛과 건강의 밸런스, 내 몸의
                  죄책감을 덜어주는 시간, 슬로우캘리에서 경험하세요!
                </p>
                <ArrowDownIcon />
              </IntroText>
            </IntroWrapper>
          </RestaurantIntro>
          <RestuarantMenuBox>
            <RestaurantMenuContainer>
              <h3>메뉴판</h3>
              <RestaurantMenuWrapper>
                <RestaurantMenu>
                  <div>이미지</div>
                  <p>전체 메뉴판</p>
                </RestaurantMenu>
                <RestaurantMenu>
                  <div>이미지</div>
                  <p>동절기 메뉴판</p>
                </RestaurantMenu>
              </RestaurantMenuWrapper>
            </RestaurantMenuContainer>
          </RestuarantMenuBox>
          <PopularMenu>
            <PopularMenuContainer>
              <h3>인기메뉴</h3>
              <PopularMenuWrapper>
                <PopularMenuCard>
                  <PopularMenuImg>이미지</PopularMenuImg>
                  <PopularMenuText>
                    <h4>클래식 참치 포케</h4>
                    <p>9,700원</p>
                  </PopularMenuText>
                </PopularMenuCard>
                <PopularMenuCard>
                  <PopularMenuImg>이미지</PopularMenuImg>
                  <PopularMenuText>
                    <h4>클래식 참치 포케</h4>
                    <p>9,700원</p>
                  </PopularMenuText>
                </PopularMenuCard>
                <PopularMenuCard>
                  <PopularMenuImg>이미지</PopularMenuImg>
                  <PopularMenuText>
                    <h4>클래식 참치 포케</h4>
                    <p>9,700원</p>
                  </PopularMenuText>
                </PopularMenuCard>
                <PopularMenuCard>
                  <PopularMenuImg>이미지</PopularMenuImg>
                  <PopularMenuText>
                    <h4>클래식 참치 포케</h4>
                    <p>9,700원</p>
                  </PopularMenuText>
                </PopularMenuCard>
              </PopularMenuWrapper>
            </PopularMenuContainer>
          </PopularMenu>
          <LeaveReviewContainer>
            <LeaveReviewButton>
              이 식당에 와보신 적 있으신가요? 리뷰를 남겨주세요!
            </LeaveReviewButton>
          </LeaveReviewContainer>
          <ReviewContainer>
            <h3>리뷰</h3>
            <ReviewItemBox>
              <ReviewTitleBox>
                <ReviewTitle>신선한 포케 맛있어요!</ReviewTitle>
                <ReviewUser>
                  <UserAvatar />
                  <p>또또128</p>
                  <StarIcon />
                  <p>5</p>
                </ReviewUser>
              </ReviewTitleBox>
              <ReviewDetail>
                <ReviewDescriptionBox>
                  솔트앤페퍼 참치 포케 먹어봤어요! 9700원에 완전 만족스러운
                  식사였어요👍밥 이 질지 않아서 식감이 케일이랑 잘 어울리고
                  참치도 덩어리 크고 신선해요. 에다마메랑 양파후레이 크가 있어서
                  바삭하고 식감 너무 좋아요🤩와사비를 정말 좋아하는데 와사비
                  오일 맛있네요ㅎㅎ상 당히 맛이 강하니 몇 방울만 넣어서 드시면
                  좋을 것 같아요! 현미밥도 들어있어서 건강하고 든든하게 한 끼
                  먹었습니다. 혼밥 완전 가능요 평일 비오는 날에 와서 웨이팅 없이
                  한적하게 먹고 갑니다! 재방문의사 있어요. 직원분도 친절하세요!
                </ReviewDescriptionBox>
                <ReviewImageWrapper>
                  <ReviewImageCard>d</ReviewImageCard>
                </ReviewImageWrapper>
                <ReviewBottomBox>
                  <ReviewLikeBox>
                    <BiLike />
                    <span>2명</span>
                    <p>도움됬어요</p>
                  </ReviewLikeBox>
                  <ReviewOptionBox>
                    <FaPen />
                    <p>내 리뷰 페이지로 이동</p>
                  </ReviewOptionBox>
                </ReviewBottomBox>
              </ReviewDetail>
            </ReviewItemBox>
            <MoreReviewButton>
              더 많은 리뷰 보러가기
              <MdOutlineKeyboardArrowRight />
            </MoreReviewButton>
          </ReviewContainer>
        </InformationLists>
        <InformationAside>
          <AsideWrapper>
            <AsidePhone>
              <h4>
                <CgPhone /> 전화
              </h4>
              <p>02-336-0688</p>
              <ButtonBox>
                <AsideCopyBtn>
                  번호 복사하기
                  <BiCopyAlt />
                </AsideCopyBtn>
              </ButtonBox>
            </AsidePhone>
            <AsideMap>
              <h4>
                <ImLocation /> 지도
              </h4>
              <p>서울 마포구 동교로38길 35 2층</p>
              <MapBox />
              <ButtonBox>
                <AsideCopyBtn>
                  주소 복사하기
                  <BiCopyAlt />
                </AsideCopyBtn>
                <AsideCopyBtn>
                  가게까지 길찾기 <TiArrowForwardOutline />
                </AsideCopyBtn>
              </ButtonBox>
            </AsideMap>
          </AsideWrapper>
        </InformationAside>
      </InformationContainer>
    </RestaurantInformationContainer>
  );
}

export default RestaurantInformation;
