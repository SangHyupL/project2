# JavaScript + Node.js + Fastify 배달의 민족 주문 기능 구현 프로젝트

<br>

# 💡 전체 아키텍처 다이어그램
 
<img width="975" alt="스크린샷 2023-05-08 오후 2 47 46" src="https://user-images.githubusercontent.com/127010049/236743934-06d039df-b6fa-44c6-be58-2441d69c225c.png">

<br>

# 💡 Frontend 아키텍처 다이어그램

<img width="673" alt="스크린샷 2023-05-03 오후 9 59 32" src="https://user-images.githubusercontent.com/127010049/235923778-fcea06a2-18a8-47b4-bbf2-09b4334f2903.png">

 <br>
 
# 💡 Backend 아키텍처 다이어그램

<img width="680" alt="스크린샷 2023-05-08 오후 2 50 56" src="https://user-images.githubusercontent.com/127010049/236744356-685f9e43-88fa-4359-83aa-5edf5e34d506.png">

 <br>

# 💻 프로젝트 소개
배당의 민족 기능에 대한 영감을 받아, 사용자가 원하는 가게에서 배달을 시키면 주문이 등록돠는 서비스

<br>

## 🎏 사용 기술 스택
사용언어: <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"><br>
플랫폼: <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"><br>
패키지 관리자: <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <br>
서버 프레임워크: <img src="https://img.shields.io/badge/fastify-202020?style=for-the-badge&logo=fastify&logoColor=white"> <br>
CI/CD 파이프라인: <img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">
<img src="https://img.shields.io/badge/argocd-EF7B4D?style=for-the-badge&logo=argo&logoColor=white"><br>
인프라: <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">

<br>

# 📌 인프라 특징
- 해당 서비스는 ECS로 구성되어 있다.
- prontend는 codepipeline으로 S3로 배포된다.
- backend는 CI/CD 파이프라인으로 Github 레포지토리에 release될 시 트리거되어, 자동적인 통합 및 배포를 실행한다
- 캐싱으로 빠른 컨텐츠를 지원하고, S3의 접근 비용을 낮추기 위해 CloudFront를 사용하였다.
- 외부에서 접근할 시 보안을 위해 http 기반 트래픽을 https로 전환하기 위해서 Certificate Manager + Route53 사용

<br>

## 📔 스택 선정 이유
language - javascript<br>
팀원들의 코딩 수준이 비슷한 자바스크립트 채택

fastify <br>
- fastify 는 express 에 비해 커뮤니티가 활성화 되지 않아 정보가 부족함
- 사용률이 낮아 정보가 매우 적은 편
- 성능이 가장 좋음

