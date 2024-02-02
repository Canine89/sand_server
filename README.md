# 배운 내용
## 서버 실행
```
yarn run:dev
```

## 모듈 생성
```
> nest g resource
```
- 모듈은 자동으로 controller, service를 만들어 준다.
- 라우팅도 자동으로 해준다.
  - 예를 들어 posts라는 이름으로 모듈을 만들면 controller는 /posts로 시작하는 라우팅을 만들어 준다.

## 잡지식 : 타입스크립트 : interface
```
interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  like: number;
  comments: string[];
  commentsCount: number;
}
```

아마도 타입을 지정하는 문법이라 생각된다.

## 잡지식 : 타입스크립트 : find()
```
posts.find((post) => post.id === +id);
```
posts를 순회하면서 조건에 맞는 + 첫 번째로 찾은 요소를 반환한다.

## 잡지식 : 타입스크립트 : map()
```
posts.map(prevPost => prevPost.id === +id ? findPost : prevPost);
```
posts를 순회하면서 함수를 호출한 결과를 모아 배열로 반환한다.
지금은 순회한 포스트(prevPost)의 id와 Param으로 받은 id(+id)가 같으면 findPost를 반환하고, 그렇지 않으면 기존 요소를 반환한다.