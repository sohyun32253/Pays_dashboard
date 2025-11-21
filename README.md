# BrunchPay Admin Dashboard

**㈜올페이즈**에서 제공한 **채용 전용 API**를 기반으로  
결제(Payment) 및 가맹점(Merchant) 관련 데이터를 시각화한  
**Admin Dashboard 프로젝트**입니다.

**React + TypeScript + Vite** 환경에서 구현했으며,  
결제대행사(PG) 도메인에 맞게 실제 관리자에서 볼 법한 구성으로 제작했습니다.

---

## 🚀 실행 방법

### 1) .env 파일 생성 
```
VITE_API_BASE_URL=https://recruit.paysbypays.com/api/v1
```
※ 환경 변수 파일(.env)은 프로젝트 루트에 생성해야 합니다.

### 2) 패키지 설치
```
npm install
```

### 3) 로컬 실행
```
npm run dev
```


### 🔧 개발 환경

| 항목      | 버전 / 옵션      |
| ------- | ------------ |
| Node.js | **20.19.5 LTS** |
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



## 📌 구현된 주요 페이지
### 1. 대시보드(Dashboard)

- 결제 요약 카드 (Total / Success / Failed / Cancelled)

- 월렛 밸런스(Wallet Balance)

- 결제 상태 비율(Status Chart - Doughnut)

- 최근 거래내역 4개 표시 (Latest Transactions)

- 결제 트렌드(Payment Trend - Bar Chart)



### 2. 거래 내역(Transaction List)

- /payments/list API 연동

- ID, 일자(Date), 가맹점(store), 금액(Amount), 결제수단(PayType), 상태(Status) 표시

- 최신순 정렬

- 금액/날짜 포맷팅 적용

### 3. 가맹점 정보(Merchants Information)

- /merchants/list API 연동

- 가맹점 코드, 이름, 상태, 업종의 기본 테이블 구성

- PG 도메인에서 활용되는 데이터 형태에 맞게 시각적 구성

### 4. Invoice Management (Mock 데이터 기반)

- API가 제공되지 않는 항목이므로 Mock 데이터 사용

- Invoice Code / Merchant / Period / Total Amount / Status 표시

- 실제 PG 정산 페이지 포맷을 참고하여 UI 구성

### 공통: 가독성 높은 상태 배지(Status Badge) 적용

## 🎨 UI / 스타일링

스타일링은 **Tailwind CSS**를 사용했습니다.
별도의 템플릿 없이 직접 UI 레이아웃 및 디자인을 구성했으며, 주요 포인트는 다음과 같습니다.

- PG 관리자 느낌의 직관적·단색 기반 UI

- 재사용 가능한 카드 UI, 상태 뱃지

- 테이블 정렬·구분선 처리로 가독성 강화

- 결제 상태별 차트 컬러 매핑



## 📊 사용된 라이브러리
| 라이브러리           | 용도                      |
| --------------- | ----------------------- |
| react-chartjs-2 | 차트 렌더링                  |
| Chart.js        | Doughnut / Bar Chart 구성 |
| react-pagination | 페이지네이션              |
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

## 📝 디자인 의도 
- 결제·가맹점 데이터를 한눈에 파악할 수 있는 정보 중심 UI

- 불필요한 시각 요소는 줄이고 관리자 환경에 적합한 구조로 구성

- 실 API 기반의 데이터 흐름을 고려하여 실무와 가까운 구조를 구현


## 📮 제출 정보

본 프로젝트는 (주)올페이즈 채용 전형을 위해 제작된 프로젝트입니다.

