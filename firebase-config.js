// ─────────────────────────────────────────────────────────────
// Firebase 설정 파일  (SETUP.md 의 5단계에서 채웁니다)
//
// Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹) → "SDK 설정 및 구성" 에 나오는
// firebaseConfig 값을 아래에 그대로 붙여넣으세요.
// 이 값은 공개되어도 괜찮은 값입니다. 실제 보안은 firestore.rules 가 담당합니다.
// ─────────────────────────────────────────────────────────────
export const firebaseConfig = {
  apiKey: "AIzaSyDp5O4F6NStI3LJEwOYHI8freK7Ee9lHu0",
  authDomain: "songsabot-2d2b2.firebaseapp.com",
  projectId: "songsabot-2d2b2",
  storageBucket: "songsabot-2d2b2.firebasestorage.app",
  messagingSenderId: "317354025107",
  appId: "1:317354025107:web:38bfcc11a5ae060f1cad66",
  measurementId: "G-LJCY7WL48C"
};

// 관리자(교사) 구글 계정 이메일.
// firestore.rules 에 적은 이메일과 같아야 합니다.
export const teacherEmail = "kimkyeyang6910@gmail.com";
