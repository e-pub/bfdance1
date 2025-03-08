import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] }, // ✅ ESLint 무시할 폴더 추가
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx,js,jsx}'], // ✅ JS & JSX도 포함
    languageOptions: {
      ecmaVersion: 2021, // ✅ 최신 ECMAScript 버전 적용
      globals: globals.browser,
      sourceType: 'module',
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',  // ✅ any 타입 허용
      '@typescript-eslint/no-unused-vars': 'off',   // ✅ 사용되지 않은 변수 허용
      '@typescript-eslint/strict-boolean-expressions': 'off', // ✅ 엄격한 boolean 검사 비활성화
      '@typescript-eslint/no-non-null-assertion': 'off', // ✅ ! 연산자 사용 허용
      '@typescript-eslint/ban-ts-comment': 'off', // ✅ @ts-ignore 등 사용 허용
      '@typescript-eslint/no-inferrable-types': 'off', // ✅ 타입 추론 가능한 변수에 타입 명시 허용
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off', // ✅ React 18+에서 필요 없는 규칙 비활성화
      'react/jsx-uses-react': 'off', // ✅ JSX에서 React 자동 import
      'no-undef': 'off', // ✅ 정의되지 않은 변수 오류 방지
      'no-unused-vars': 'warn', // ✅ 사용되지 않는 변수 경고만 표시
      'no-unused-expressions': 'off', // ✅ Expected an assignment or function call 문제 해결
      'no-console': 'warn', // ✅ console.log 사용 경고
      'no-debugger': 'warn', // ✅ debugger 사용 경고
    },
    settings: {
      react: {
        version: 'detect', // ✅ React 버전 자동 감지
      },
    },
  }
)
