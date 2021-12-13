# PickAndDrink



# 테스트용

# use-github-category-test

깃허브의 각 기능들의 사용법을 연습하기 위한 용도

## Issues
각 템플릿을 만듬

- settings 항목에서 생성 가능
  - 조금 내려가면 `Features` 항목의 `Issue` 설정이 있음
  - `Set up templetes`  ->  `Add template: select`  ->  `Feature request` ->  `Preview and edit`  ->  연필 아이콘(수정)을 클릭해 내용 작성
  - 내용 작성 완료 후, `Propose changes` ->  `Commit changes` 클릭하면 완료
  - 정상적으로 완료 되었다면 **Updated issue templates for this repository** 라는 메세지가 상단바에 나타
- 생성한 이슈 템플릿을 확인하시려면 Issue 탭을 누른 후, New Issue 버튼을 누르시면 확인이 가능

## Project
칸반 보드를 활용하여 프로젝트 생성하는 과정

- 상단의 메뉴 중에 `Projects` 탭  ->  `Create a Project`
  - 프로젝트 이름과 설명 등을 적고, `Template` 에서 `Basic Kanban` 을 선택 후 `Create project`

- 성공적으로 프로젝트 생성을 하게 되면 **Project created from Basic kanban template** 라는 메세지가 상단바에 나타난다
프로젝트에 맞게 추가 column 을 형성하거나, column 에 이슈 태스크 카드를 드래그앤드롭하며 활용하면 된다

- 프로젝트 칸반보드 각 columns 설명
  - Todo: 앞으로 해야할 일
  - In Progress: 현재 작업중인 일
  - Done: 끝난 일

## Milestone
Milestone 은 이정표 역할을 하며, 태스크 카드(Issue)들을 그룹화하는데 사용

> Milestone에 연결된 태스크 카드(Issue)가 종료되면 Milestone마다 진행 상황이 업데이트되는 것을 볼 수 있습니다. 
> 이 Milestone 기능을 통해 연관된 이슈의 추적과 진행 상황을 한눈에 파악할 수 있는 장점이 있습니다. 
> Sprint 나 단계별 구현과 관련한 유사 이슈들을 하나하나 추적하며 살펴보기보다 Milestone을 이용해 간편히 관리합시다.

- `Issue` 탭 ->  `Labels` 버튼 오른쪽에 있는 `Milestones` 클릭
- `Create a Milestone` 또는 `New milestone` 하여 이정표를 작성
- `Title` 에는 원하는 이정표 이름 쓰거나 혹은 진행 중인 sprint의 이름을 쓰는 것을 추천
- `Due date`는 Milestone의 마지막 날을 의미(말 그대로 마감일)
- `Description`에 자유롭게 작성 후에 `Create milestone` 을 누르면 생성 완료

> 계획에 알맞은 갯수만큼 Milestone을 만들어서 프로젝트를 진행하는 것을 추천!

## 태스크 카드 활용

> 이슈 템플릿과 프로젝트 칸반보드, 마일스톤 작성이 완료되었다면 본격적으로 태스크 카드를 활용할 수 있다

1. Issue 생성
  - 여기서는 태스크 카드 생성하는 예로 알아보자 
  - `Issue`탭 ->  `New Issue`  -> 원하는 템플릿 선택(`Get started`) 후 태스크 카드 작성
    - 이슈 템플릿의 제목과 본문을 만들고자 하는 태스크 카드에 맞게 수정
    - 제목과 본문을 작성했다면, 우측 탭을 이용해 세부 설정을 진행
      - `Assigness` : 해당 태스크를 맡은 사람을 지정. assign yourself를 누르시면 자신의 태스크로 만들 수 있다
      - `Labels` : 태스크 카드에 라벨링을 할 수 있습니다. `E:1h`와 같이 예상 소요시간을 라벨로 만들어 라벨링하는 것을 추천
      - `Projects` : 프로젝트를 지정
      - `Milestone` : 해당 태스크를 마일스톤과 연결시켜 기한을 정할 수 있게 함
    - 전부 입력하였다면 `Submit new Issue`
  - 태스크 카드를 생성하였다면, 이를 원하는 프로젝트에 넣을 수 있다(칸반 보드)
    - 해당 프로젝트(칸반 보드)에서 `+ Add cards` 눌러서 나오는 태스크 카드를 드래그 앤 드랍하면 된다
    - 태스크 카드에 맞게 branch를 생성하고, PR을 보내는데 활용할 수 있다
  - 브랜치(예: dev)에서 코드 작업 후 PR을 보내는 경우의 활용법
    - PR을 보내셨다면 Merge하기 전에 `Linked issues`로 이슈(태스크 카드)를 링크할 수 있다
    - 해당 PR이 Merge된다면 자동으로 이슈(태스크 카드)도 close된다
    - 생성한 태스크 카드에 맞게 branch를 만들고, PR을 날린 뒤 merge하는 경우, 위와 같이 세팅을 먼저 진행했다면 자동적으로 이 태스크 카드가 close 상태로 바뀐다
    - 이 뒤에는 닫힌 해당 이슈(태스크 카드)로 돌아가서 Merge전까지 걸린 시간을 라벨링해 주는 것을 추천

## Github Discussions 활용

커뮤니티에서 글 작성하고 거기에 댓글다는 것을 생각하면 된다

- `Settings` 탭  ->  `Features`에서 `Discussions` 항목을 활성화
- 새롭게 생성된 Discussions 메뉴에 들어가 `New Discussions`로 디스커션을 생성하여 자유롭게 대화하면 된다
- Comment 형식으로 디스커션을 이어갈 수 있다(일종의 댓글)

