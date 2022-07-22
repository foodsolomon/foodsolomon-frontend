import React from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaStar, FaUserCircle } from 'react-icons/fa';

const RestaurantInformationContainer = styled.section`
  width: 1400px;
`;

const InformationNavigationBox = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 3px solid black;
`;
const InformationNavigationBar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 50px;
`;

const InformationNavigationBarItems = styled.li`
  padding: 15px;
`;
const InformationContainer = styled.div`
  display: flex;
`;
const InformationLists = styled.div`
  width: 998px;
`;
const InformationAside = styled.aside`
  width: 419px;
  height: 599px;
  background: lightgrey;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  position: sticky;
  top: 20%;
`;

const AsidePhone = styled.div`
  width: 321px;
  height: 136px;
  h4 {
    font-size: 24px;
    margin: 20px 0;
  }
  p {
    margin: 10px 0;
  }
`;

const AsideMap = styled.div`
  width: 359px;
  height: 373px;
  h4 {
    font-size: 24px;
    margin: 20px 0;
  }
  p {
    margin: 10px 0;
  }
`;

const ButtonBox = styled.div`
  width: 330px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;
const AsideCopyBtn = styled.button`
  width: 130px;
  height: 50px;
  background: grey;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AsideCallBtn = styled.button`
  width: 180px;
  height: 50px;
  background: grey;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MapBox = styled.div`
  width: 359px;
  height: 195px;
  background: grey;
`;

const RestaurantIntro = styled.div`
  h3 {
    font-size: 34px;
  }
  p {
    width: 600px;
    line-height: 30px;
  }
  margin: 30px 0;
`;
const RestuarantMenuBox = styled.div`
  h3 {
    font-size: 34px;
  }
  margin: 30px 0;
`;

const RestaurantMenuWrapper = styled.div`
  display: flex;
`;

const RestaurantMenu = styled.div`
  width: 240px;
  height: 320px;
  margin: 20px 20px 20px 0;

  img {
    width: 240px;
    height: 240px;
    background: grey;
    border-radius: 20px;
  }
  h4 {
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0;
  }
`;

const PopularMenu = styled.div`
  h3 {
    font-size: 34px;
  }
`;

const PopularMenuTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
`;

const CategoryBox = styled.div`
  display: flex;
`;

const CategoryItem = styled.div`
  width: 200px;
  height: 124px;
  border-radius: 20px;
  background: lightgrey;
  margin: 20px 20px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: grey;
  }
`;

const PopularMenuWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const PopularMenuItemCard = styled.div`
  margin: 20px 20px 20px 0;
`;

const PopularMenuItem = styled.div`
  width: 198px;
  height: 280px;
  background: grey;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
`;

const PopularMenuItemText = styled.div`
  color: black;
  height: 50px;
  margin: 0 0 15px 15px;
  h5 {
    font-size: 22px;
    font-weight: 700;
  }

  p {
    line-height: 30px;
  }
`;

const LeaveReviewButton = styled.button`
  width: 100%;
  height: 105px;
  border-radius: 15px;
  background: black;
  color: white;
  font-weight: 600;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 700;
    font-size: 34px;
  }
  margin: 30px 0;
`;

const ReviewItemBox = styled.div`
  width: 100%;
  height: 500px;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px 0;
`;

const ReviewTitleBox = styled.div`
  font-weight: 700;
  font-size: 35px;
`;

const ReviewNicknameBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 250px;
  height: 30px;
  background: grey;
  border-radius: 40px;
  span {
    margin: 0 10px;
  }
`;

const ReviewDescriptionBox = styled.div`
  line-height: 30px;
  width: 60%;
`;

const ReviewImageBox = styled.div``;

const ReviewImageCard = styled.img`
  width: 198px;
  height: 198px;
  background: grey;
  border-radius: 20px;
  margin: 0 20px 0 0;
`;

const MoreReviewButton = styled.button`
  width: 300px;
  height: 45px;
  font-weight: 600;
  font-size: 28px;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
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
            <h3>식당소개</h3>
            <p>
              슬로우캘리는 대한민국 1호 포케전문점입니다! 누구나 건강한 음식을
              편견 없이 맛있게 먹을 수 있다면 어떨까? 라는 질문 속에서
              시작되었습니다. 슬로우캘리는 하와이 대표 음식 포케를 한국식으로
              재해석 하였습니다. 맛과 건강의 밸런스, 내 몸의 죄책감을 덜어주는
              시간, 슬로우캘리에서 경험하세요!
            </p>
            <CategoryBox>
              <CategoryItem>
                <img src='' alt='' />
                <h4>아시안 푸드</h4>
              </CategoryItem>
              <CategoryItem>
                <img src='' alt='' />
                <h4>기분 좋은 날</h4>
              </CategoryItem>
              <CategoryItem>
                <img src='' alt='' />
                <h4>날씨 좋은 날</h4>
              </CategoryItem>
              <CategoryItem>
                <img src='' alt='' />
                <h4>점심메뉴 TOP 10</h4>
              </CategoryItem>
            </CategoryBox>
          </RestaurantIntro>
          <RestuarantMenuBox>
            <h3>메뉴판</h3>
            <RestaurantMenuWrapper>
              <RestaurantMenu>
                <img src='' alt='' />
                <h4>전체 메뉴판</h4>
                <p>별명이별건가님이 제공</p>
              </RestaurantMenu>
              <RestaurantMenu>
                <img src='' alt='' />
                <h4>전체 메뉴판</h4>
                <p>별명이별건가님이 제공</p>
              </RestaurantMenu>
            </RestaurantMenuWrapper>
          </RestuarantMenuBox>
          <PopularMenu>
            <PopularMenuTitleBox>
              <h3>인기메뉴</h3>
              <p>
                <span>전체메뉴보기</span>
                <MdOutlineKeyboardArrowRight size={30} />
              </p>
            </PopularMenuTitleBox>
            <PopularMenuWrapper>
              <PopularMenuItemCard>
                <PopularMenuItem>
                  <PopularMenuItemText>
                    <h5>메뉴 이름</h5>
                    <p>7,000원</p>
                  </PopularMenuItemText>
                </PopularMenuItem>
              </PopularMenuItemCard>
              <PopularMenuItemCard>
                <PopularMenuItem>
                  <PopularMenuItemText>
                    <h5>메뉴 이름</h5>
                    <p>7,000원</p>
                  </PopularMenuItemText>
                </PopularMenuItem>
              </PopularMenuItemCard>
              <PopularMenuItemCard>
                <PopularMenuItem>
                  <PopularMenuItemText>
                    <h5>메뉴 이름</h5>
                    <p>7,000원</p>
                  </PopularMenuItemText>
                </PopularMenuItem>
              </PopularMenuItemCard>
              <PopularMenuItemCard>
                <PopularMenuItem>
                  <PopularMenuItemText>
                    <h5>메뉴 이름</h5>
                    <p>7,000원</p>
                  </PopularMenuItemText>
                </PopularMenuItem>
              </PopularMenuItemCard>
              <PopularMenuItemCard>
                <PopularMenuItem>
                  <PopularMenuItemText>
                    <h5>메뉴 이름</h5>
                    <p>7,000원</p>
                  </PopularMenuItemText>
                </PopularMenuItem>
              </PopularMenuItemCard>
            </PopularMenuWrapper>
          </PopularMenu>
          <LeaveReviewButton>
            이 식당에 와보신 적 있으신가요? 리뷰를 남겨주세요
          </LeaveReviewButton>
          <ReviewContainer>
            <h3>리뷰</h3>
            <ReviewItemBox>
              <ReviewTitleBox>신선한 포케 맛있어요!</ReviewTitleBox>
              <ReviewNicknameBox>
                <FaUserCircle size={20} />
                <span>닉네임입니다</span>
                <FaStar size={20} />
                <span>4</span>
              </ReviewNicknameBox>
              <ReviewDescriptionBox>
                솔트앤페퍼 참치 포케 먹어봤어요! 9700원에 완전 만족스러운
                식사였어요👍밥 이 질지 않아서 식감이 케일이랑 잘 어울리고 참치도
                덩어리 크고 신선해요. 에다마메랑 양파후레이 크가 있어서 바삭하고
                식감 너무 좋아요🤩와사비를 정말 좋아하는데 와사비 오일
                맛있네요ㅎㅎ상 당히 맛이 강하니 몇 방울만 넣어서 드시면 좋을 것
                같아요! 현미밥도 들어있어서 건강하고 든든하게 한 끼 먹었습니다.
                혼밥 완전 가능요 평일 비오는 날에 와서 웨이팅 없이 한적하게 먹고
                갑니다! 재방문의사 있어요. 직원분도 친절하세요!
              </ReviewDescriptionBox>
              <ReviewImageBox>
                <ReviewImageCard />
                <ReviewImageCard />
                <ReviewImageCard />
                <ReviewImageCard />
              </ReviewImageBox>
            </ReviewItemBox>
            <ReviewItemBox>
              <ReviewTitleBox>신선한 포케 맛있어요!</ReviewTitleBox>
              <ReviewNicknameBox>
                <FaUserCircle size={20} />
                <span>닉네임입니다</span>
                <FaStar size={20} />
                <span>4</span>
              </ReviewNicknameBox>
              <ReviewDescriptionBox>
                솔트앤페퍼 참치 포케 먹어봤어요! 9700원에 완전 만족스러운
                식사였어요👍밥 이 질지 않아서 식감이 케일이랑 잘 어울리고 참치도
                덩어리 크고 신선해요. 에다마메랑 양파후레이 크가 있어서 바삭하고
                식감 너무 좋아요🤩와사비를 정말 좋아하는데 와사비 오일
                맛있네요ㅎㅎ상 당히 맛이 강하니 몇 방울만 넣어서 드시면 좋을 것
                같아요! 현미밥도 들어있어서 건강하고 든든하게 한 끼 먹었습니다.
                혼밥 완전 가능요 평일 비오는 날에 와서 웨이팅 없이 한적하게 먹고
                갑니다! 재방문의사 있어요. 직원분도 친절하세요!
              </ReviewDescriptionBox>
              <ReviewImageBox>
                <ReviewImageCard />
                <ReviewImageCard />
                <ReviewImageCard />
                <ReviewImageCard />
              </ReviewImageBox>
            </ReviewItemBox>
            <MoreReviewButton>
              더 많은 리뷰 보러가기
              <MdOutlineKeyboardArrowRight />
            </MoreReviewButton>
          </ReviewContainer>
        </InformationLists>
        <InformationAside>
          <AsidePhone>
            <h4>전화</h4>
            <p>02-336-0688</p>
            <ButtonBox>
              <AsideCopyBtn>복사하기</AsideCopyBtn>
              <AsideCallBtn>가게에 전화걸기</AsideCallBtn>
            </ButtonBox>
          </AsidePhone>
          <AsideMap>
            <h4>지도</h4>
            <MapBox />
            <p>서울 마포구 동교로38길 35 2층</p>
            <p>연남동 390-42</p>
            <ButtonBox>
              <AsideCopyBtn>복사하기</AsideCopyBtn>
              <AsideCallBtn>가게까지 길찾기</AsideCallBtn>
            </ButtonBox>
          </AsideMap>
        </InformationAside>
      </InformationContainer>
    </RestaurantInformationContainer>
  );
}

export default RestaurantInformation;
