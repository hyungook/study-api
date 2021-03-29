# Book Search

### API 가이드

#### 요청

주소 : 주소
전송방식 : GET(주소창의 모든 정보를 담아 정보를 전달하는 방식) / POST(주소창이 아니라 내부적으로 정보를 전송하는 방식이라고 생각하면 됨)
보낼 것

- query 검색어(필수)
- sort 정렬 방식(선택)
- target 검색 대상 (선택)

#### 응답

형식 : JSON(JavaScript Object Nataion) / xml - (최근에는 보통 JSON으로)
json : javascript의 object라고 생각하면 되지만, 그러나 단순히 javascript에서만 사용하는 것이 아니라 다른 어떤 언어에서도 사용할 수 있는 표준으로 사용하기 때문에 정보 전송에 많이 사용되고 있다.

응답 의미 설명

- title 도서 제목
- contents 도서 소개
- thumbnail 도서 표지 썸네일 URL
