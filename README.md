# BrunchPay Admin Dashboard

React + TypeScript로 구축한 결제·가맹점 관리 대시보드입니다.

테스트 API를 연동하여 Dashboard / Payments / Merchants / Invoice의 관리자 화면을 구현하였으며,

PG 도메인의 데이터 흐름과 시각화를 중점적으로 설계했습니다.

---

## 🚀 실행 방법

### 1) .env 파일 생성 
```
VITE_API_BASE_URL=https://recruit.paysbypays.com/api/v1
```
※ 해당 URL은 테스트용 공개 API로, 개발 환경에서만 사용됩니다.

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

### 4. 인보이스 관리 (Invoices Management)

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

## 📸 시연 영상
https://github.com/user-attachments/assets/1542badc-9ac2-40af-a24e-f0afebf10c9c




