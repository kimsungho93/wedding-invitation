# 프로젝트 지침

## 개요
이 문서는 리액트 프로젝트의 패키지 구조 및 코딩 가이드라인을 정의합니다.

## 패키지 구조

```
src/
├── assets/              # 정적 리소스 (이미지, 폰트, 아이콘 등)
│   ├── images/
│   ├── fonts/
│   └── icons/
│
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── common/         # 공통 컴포넌트 (Button, Input, Modal 등)
│   ├── layout/         # 레이아웃 컴포넌트 (Header, Footer, Sidebar 등)
│   └── [feature]/      # 특정 기능별 컴포넌트
│
├── pages/              # 페이지 컴포넌트 (라우트별)
│   └── [PageName]/     # 각 페이지별 폴더
│       ├── index.tsx   # 페이지 메인 컴포넌트
│       └── components/ # 해당 페이지 전용 컴포넌트
│
├── hooks/              # 커스텀 React Hooks
│   ├── useAuth.ts
│   ├── useFetch.ts
│   └── ...
│
├── services/           # API 호출 및 외부 서비스 로직
│   ├── api/           # API 엔드포인트별 서비스
│   │   ├── auth.ts
│   │   └── user.ts
│   └── config.ts      # API 설정
│
├── store/              # 상태 관리 (Redux, Zustand, Recoil 등)
│   ├── slices/        # Redux 슬라이스 또는 상태 모듈
│   ├── atoms/         # Recoil atoms
│   └── index.ts
│
├── types/              # TypeScript 타입 정의
│   ├── api.ts         # API 관련 타입
│   ├── models.ts      # 데이터 모델 타입
│   └── common.ts      # 공통 타입
│
├── utils/              # 유틸리티 함수
│   ├── format.ts      # 포맷팅 함수
│   ├── validation.ts  # 검증 함수
│   └── helpers.ts     # 헬퍼 함수
│
├── constants/          # 상수 정의
│   ├── routes.ts      # 라우트 경로
│   ├── config.ts      # 앱 설정 상수
│   └── messages.ts    # 메시지 상수
│
├── styles/             # 전역 스타일 및 테마
│   ├── global.css
│   ├── theme.ts
│   └── variables.css
│
├── routes/             # 라우팅 설정
│   └── index.tsx
│
├── App.tsx             # 루트 컴포넌트
└── main.tsx            # 엔트리 포인트
```

## 파일 네이밍 규칙

- **컴포넌트**: PascalCase (예: `Button.tsx`, `UserProfile.tsx`)
- **Hooks**: camelCase with 'use' prefix (예: `useAuth.ts`, `useFetch.ts`)
- **유틸리티/서비스**: camelCase (예: `formatDate.ts`, `authService.ts`)
- **타입 파일**: camelCase (예: `user.types.ts`, `api.types.ts`)
- **상수**: camelCase for file, UPPER_SNAKE_CASE for exports (예: `apiConfig.ts` 내부에 `API_BASE_URL`)

## 컴포넌트 작성 규칙

1. **단일 책임 원칙**: 각 컴포넌트는 하나의 명확한 목적을 가져야 함
2. **Props 타입 정의**: TypeScript 인터페이스로 props 명시
3. **컴포넌트 구조**:
   ```tsx
   // 1. Import statements
   // 2. Type definitions
   // 3. Component definition
   // 4. Styled components (if using styled-components)
   // 5. Export
   ```

## 상태 관리 원칙

- **로컬 상태**: useState 사용 (컴포넌트 내부 상태)
- **공유 상태**: Context API 또는 상태 관리 라이브러리 사용
- **서버 상태**: React Query, SWR 등 사용 권장

## Import 순서

1. React 및 외부 라이브러리
2. 내부 컴포넌트
3. Hooks
4. Utils/Services
5. Types
6. Styles
7. Assets

## 추가 규칙

- 컴포넌트당 200줄 이하 권장
- 함수형 컴포넌트 사용
- Early return 패턴 활용
- 매직 넘버/스트링 지양, 상수화
- 주석은 '왜(Why)'를 설명, '무엇(What)'은 코드로 표현

