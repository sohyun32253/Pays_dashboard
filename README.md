# BrunchPay Admin Dashboard

BrunchPay에서 제공한 **채용 전용 API**를 기반으로  
결제(Payment) 및 가맹점(Merchant) 관련 데이터를 시각화한  
**Admin Dashboard 프로젝트**입니다.

React + TypeScript + Vite 환경에서 구현했으며,  
결제대행사(PG) 도메인에 맞게 실제 관리자에서 볼 법한 구성으로 제작했습니다.

---

## 🚀 실행 방법

### 1. 패키지 설치
```
npm install
```

### 2. 로컬 실행
```
npm run dev
```
### 🔧 개발 환경

| 항목      | 버전 / 옵션      |
| ------- | ------------ |
| Node.js | **20.x LTS** |
| 패키지 매니저 | npm          |
| 프레임워크   | React 18+    |
| 번들러     | Vite         |
| 언어      | TypeScript   |
| 스타일     | Tailwind CSS |

### 📦 API 정보

#### Base URL

https://recruit.paysbypays.com/api/v1


#### Swagger 문서
https://recruit.paysbypays.com/swagger-ui/index.html

프로젝트 내에서는 환경변수를 통해 관리합니다:

VITE_API_BASE_URL=https://recruit.paysbypays.com/api/v1


※ 환경 변수 파일(.env)은 실 사용 시 프로젝트 루트에 생성해야 합니다.

## 📌 구현된 주요 페이지
### 1. Dashboard (필수 포함)

- 결제 요약 카드 (Total / Success / Failed / Cancelled)

- 월렛 밸런스(Wallet Balance)

- 결제 상태 비율(Status Chart - Doughnut)

- 결제 트렌드(Payment Trend - Bar Chart)

- 최근 거래내역 4개 표시 (Latest Transactions)

### 2. Transaction List (필수 포함)

- /payments/list API 연동

- ID, 일자(Date), 금액(Amount), 결제수단(PayType), 상태(Status) 표시

- 최신순 정렬

- 금액/날짜 포맷팅 적용

### 3. Merchant Information (가맹점 정보 페이지)

- /merchants/list 연동

- 가맹점 코드, 이름, 상태, 업종 타입 등 테이블 구성

- 가독성 높은 상태 배지(Status Badge) 적용

- PG 도메인에서 활용되는 데이터 형태에 맞게 시각적 구성

### 4. Invoice Management (Mock 데이터 기반)

- API가 제공되지 않는 항목이므로 Mock 데이터 사용

- Invoice Code / Merchant / Period / Total Amount / Status 표시

- 실제 PG 정산 페이지 포맷을 참고하여 UI 구성

## 🎨 UI / 스타일링


스타일링은 Tailwind CSS를 사용했습니다.
별도의 템플릿 없이 직접 UI 레이아웃 및 디자인을 구성했으며, 주요 포인트는 다음과 같습니다:

- PG 관리자에 어울리는 단색 기반의 직관적인 레이아웃

- 카드 UI, 상태 뱃지(Status Badge) 등 재사용 가능 컴포넌트화

- 데이터 가독성을 위한 테이블 정렬 및 구분선 처리

- 차트 색상은 결제 상태 및 결제수단에 대응되도록 설정



## 📊 사용된 라이브러리
| 라이브러리           | 용도                      |
| --------------- | ----------------------- |
| react-chartjs-2 | 차트 렌더링                  |
| Chart.js        | Doughnut / Bar Chart 구성 |
| axios           | API 통신                  |
| Tailwind CSS    | 스타일링                    |



## 📁 폴더 구조 (요약)
```
src/
 ├── api/            # Axios 클라이언트 설정
 ├── components/     # UI 컴포넌트
 ├── pages/          # 주요 화면 (Dashboard / Payments / Merchants / Invoice)
 ├── styles/         # Badge, Card 등 UI 스타일 요소
 ├── types/          # API 응답 타입 정의
 └── utils/          # 금액/날짜 포맷 함수 등
```

## 📝 디자인 의도 (요청된 항목)
- 결제/가맹점 데이터를 한눈에 파악할 수 있는 구조

- 관리자(Admin) 페이지에 적합한 간결하고 직관적인 UI

- API 구조에 맞춰 실 데이터 기반의 실무형 페이지 구성


## 📮 제출 정보

본 프로젝트는 BrunchPay 채용 전형을 위해 제작되었으며,
요구된 기능 및 조건에 맞춰 React + TypeScript 기반으로 개발했습니다.

