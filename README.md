# 배달의 민족 주문 기능 구현 프로젝트


Frontend

<img width="673" alt="스크린샷 2023-05-03 오후 9 59 32" src="https://user-images.githubusercontent.com/127010049/235923778-fcea06a2-18a8-47b4-bbf2-09b4334f2903.png">
 
 > GitHub Action을 사용하여 배포해도 되지만, 서버 쪽을 GitHub Action으로 구축해서 다른 방법을 쓰고 싶었고, 또한 CodeBuild는 환경 변수 적용이 좀 더 유연하다고 생각하기 때문에 CodeBuild를 이용해서 배포를 자동화했습니다
 > 캐싱을 이용하기 위해 CloudFront를 이용하여 S3에 접근하도록 했습니다.
 
 
Backend

<img width="674" alt="스크린샷 2023-05-03 오후 10 13 23" src="https://user-images.githubusercontent.com/127010049/235926308-dbb2b9aa-ab93-44d3-8750-d739f1fe2452.png">

 > backend와 DataBase는 Git Action을 통해 배포를 했는데, dockerfile 작성 후 그 내용을 토대로 빌드하여 ECR로 푸쉬했고, ECR로 올린 이미지와 task-definition을 이용해 ECS에 배포하도록 하였습니다
 
 
 전체적인 AWS 다이어그램은 아래와 같습니다
 
<img width="975" alt="스크린샷 2023-05-08 오후 2 47 46" src="https://user-images.githubusercontent.com/127010049/236743934-06d039df-b6fa-44c6-be58-2441d69c225c.png">
