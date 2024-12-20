# busan-2024-3
// 기존에 작업하던 디렉토리가 어느 리모트 저장소와 연결되어 있는지 확인하기
git remote -v

// 타 리포지토리와 연결하고 싶은 경우
git remote set-url {리포지토리URL붙여넣기}

// busan-2024-3의 리포지토리와 연결하는 경우
git remote set-url https://github.com/busan-2024-3/front-end-study.git

// 메인 브랜치에 푸시하고싶지 않은 경우
git checkout -b {새 브랜치 이름}

// 기존 다른 브랜치로 이동하는 경우
git checkout {기존 브랜치 이름}

// 최신의 메인브랜치를 반영하여 새 브랜치를 생성하고 싶다?
// 기존 작업하던 내용을 새 브랜치를 생성하여 커밋 해 두기(하려면)
git checkout -b {새 브랜치}
UI를 사용해 커밋하기 (푸시하지 않으면 리모트에 게시되지 않음)
// 메인으로 돌아와 최신 상태를 pull 한다 (별개의 브랜치에 커밋했기 때문에 충돌하지 않게 됨.)
git checkout main
git checkout -b {새 브랜치 이름}
