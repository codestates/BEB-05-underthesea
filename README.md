# UnderTheSea

## BEB 05 first Project Team 02

## 팀 소개

### BEB-05-02조

- **팀명 : UnderTheSea 언더더씨**
- **팀장 : 김윤겸**
- **팀원 : 박찬우, 서경근, 홍유진**
- Site  Link :
- Date : 2022/08/08 - 2022/08/16

> ➡️ **프로젝트 목표**
> 
> 
> ### **최대의 NFT Marketplace ‘OpenSea’를 클론 코딩한 플랫폼 구현.**
> 

### 역할 분담

| 이름 | 포지션 |
| --- | --- |
| 김윤겸 | BE, IPFS |
| 서경근 | BE |
| 박찬우 | FE |
| 홍유진 | FE |

## 저장소

### 팀 레포

[https://github.com/codestates/BEB-05-underthesea](https://github.com/codestates/BEB-05-underthesea)

---

## 구현 기능

### 기본 기능

- [ ]  사용자는 메타마스크 지갑을 연동하여 로그인 할 수 있다
- [ ]  사용자는 자신이 소유한 nft 목록을 확인할 수 있다

### 주요 기능

- [ ]  사용자는 판매중인 nft 목록을 나열할 수 있다 → 조회 방식 선택(최근 날짜, 인기순, 가격 높은순)
- [ ]  사용자는 nft의 상세 정보를 확인할 수 있다
- [ ]  사용자는 nft를 생성 및 배포할 수 있다
- [ ]  사용자는 자신의 거래 내역을 확인할 수 있다
- [ ]  사용자는 민팅된 nft를 구매할 수 있다
- [ ]  사용자는 구입한 nft를 판매할 수 있다

### 추가 기능

- [ ]  사용자는 소유한 nft를 전송할 수 있다
- [ ]  사용자는 nft를 고정된 가격에 구매하거나 경매할 수 있다
- [ ]  사용자는 카테고리의 Explore에서 nft 조회 방식을 선택할 수 있다

---

## 시나리오

**Home**

- 기본 홈 화면
- 왼쪽 위 마크를 누르면 홈으로 이동한다.

**Explore 및 검색**

- 검색을 하거나 Explore를 누르면 marketplace로 이동한다.
- 클라이언트는 서버에 NFT 정보를 요청하고 서버는 DB에 저장된 NFT 정보를 응답한다.
- 클라이언트는 응답받은 정보를 marketplace 페이지에 보여준다.
- NFT 중 하나를 눌렀을 때 지갑연결이 되어있으면 구매 페이지로, 아니면 지갑 연결 페이지로 이동한다.

**지갑 연결**

- 연결이 되지 않은 상황에오른쪽 위 지갑을 누르거나, 오른쪽 위 사용자를 누르거나, Explore에서 NFT를 눌렀을 때 이동한다.
- 지갑을 클릭하면 MetaMask 지갑을 표시한다.
- 지갑에 로그인하면 사이트에 로그인된다.

**NFT 만들기**

- 사용자가 Create 버튼을 눌렀을 때 이동한다.
- 클라이언트는 사용자에게 NFT CreationFrom을 제공한다.
- 사용자는 이미지와 정보를 입력하고 Create를 클릭한다.
- 이미지를 IPFS에 저장 후 이미지 IPFS URI를 입력한 정보에 추가하여 metadata.json 파일을 IPFS에 업로드한다. (->explore에서 보이게)

**필수 구현**

- 지갑 연결 로그인
- marketplace에서 데이터 받아와 표시
- NFT Create를 하면 데이터베이스에 저장

**추가 기능 구현**

- 내가 만든 NFT 컬렉션 페이지 조회
- 작가별 NFT 페이지 조회
- market place 정렬 기능 (가격순, 최신순 등)

---

## To Do

### 💻 Back End

**[ 지갑 연결, 컨트랙트 발행, 기능 구현 ]**

- [ ]  Project Setup
- [ ]  [Login / Wallet] Connecting MetaMask
- [ ]  NFT contract 구현
- [ ]  Marketplace contract setup
- [ ]  Make Items 구현
- [ ]  Purchase Items 구현

### 💻 Front End

**[ 개발 환경 구축]**

- [ ]  Setup (starter kit)
- [ ]  MetaMask 네트워크에 Hardhat Node 추가
- [ ]  MetaMask 계정을 브라우저와 연결
- [ ]  Components 구성, 라이브러리 추가, Handler 추가, MetaMask 계정 연결을 위한 Hook 추가
- [ ]  블록체인 연결, 컨트랙트 가져오기
- [ ]  Navbar Components 추가, Nav 구성 및 경로 설정
- [ ]  지갑 연결 버튼 생성

**[ Home Component ]**

- [ ]  마켓플레이스 nft 컨트랙트 가져오기
- [ ]  ipfs에서 nft 메타데이터 가져오기, API 연결
- [ ]  판매 아이템 항목 생성
- [ ]  구매 아이템 항목 생성
- [ ]  판매되지 않은 아이템 사용자 구매
- [ ]  항목 조회 완료 전 Loading Page
- [ ]  nft 상세정보(이미지와 이름, 가격, 설명) 맵핑 카드
- [ ]  가격 단위 wei → eth로 변환
- [ ]  보유 자산 항목 나열

**[ Create Component ]**

- [ ]  새로 생성된 nft 메타데이터를 ipfs에 업로드
- [ ]  블록체인에 저장할 nft 메타데이터 입력 양식 생성
- [ ]  변경 사항을 ipfs에 업로드
- [ ]  사용자가 생성할 nft 입력 양식 제출시 메타데이터를 ipfs에 업로드
- [ ]  ipfs로부터 민팅된 항목으로 리스트 생성
- [ ]  Home 화면 수정 및 UI 구축

**[ MyListedItems Component ]**

- [ ]  사용자의 nft 리스트 나열
- [ ]  판매된 nft는 SoldItems로 이동
- [ ]  Home 화면 수정 및 UI 구축

**[ MyPurchases Component ]**

- [ ]  구매한 nft를 MyPurchases로 이동
- [ ]  사용자가 구매한 아이템 항목 생성
- [ ]  마켓플레이스의 항목 계정으로 필터링
- [ ]  구매한 아이템의 메타데이타를 구매 항목 리스트에 업로드
- [ ]  Home 화면 수정 및 UI 구축

---

### Flow Chart

![UnderTheSea Flowchart.drawio.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c5c2448f-2082-44ca-a0c4-80474e21de3e/UnderTheSea_Flowchart.drawio.png)

---

### Install

1. git clone 
2. npm install
3. npm start

---
