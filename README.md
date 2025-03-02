# Apy_Poll

--

## 가상환경 실행 방법

1. python3 -m venv venv(윈도우의 경우, python -m venv venv)
2. source venv/bin/activate.sh(윈도우의 경우 venv/Scripts/activate)
3. 가상환경 종료하려면 deactivate(그냥 터미널 닫아도 상관 읍음)

--

## 노드 및 NPM 설치

1. node --version 입력 후 결과 확인(노드가 설치되어있으면 버전 정보가 보임)
2. node가 없다면 설치하기(그냥 구글창에 검색해서 설치)
3. 노드를 설치했다면 npm 도 설치(npm --version 입력 후 아무것도 안뜨면 설치해야댐)
4. 만약 노드를 설치했는데, node를 찾을 수 없다고 하면, 환경변수 설정 하러 가시면 됩니당(window의 경우 환경변수 설정. mac의 경우 .zshrc 설정 필요. 해당 내용은 인터넷어 검색하면 다나옴)

--

## 리엑트 시작

1. mkdir Poll
2. cd Poll
3. npx create-react-app apy_poll
4. cd cd apy_poll
5. npm start
