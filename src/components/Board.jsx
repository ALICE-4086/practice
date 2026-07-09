const posts = [
  { id: 5, title: '공지: 서비스 점검 안내', author: '관리자', date: '2026-07-08', notice: true },
  { id: 4, title: 'React + Vite 환경 구성 가이드', author: '홍길동', date: '2026-07-07' },
  { id: 3, title: '게시판 UI 디자인 리뷰 요청', author: '김철수', date: '2026-07-06' },
  { id: 2, title: '디자인 시스템 토큰 정리', author: '이영희', date: '2026-07-05' },
  { id: 1, title: '첫 번째 게시글입니다', author: '홍길동', date: '2026-07-04' },
]

export default function Board() {
  return (
    <section className="board">
      <h2>게시판</h2>
      <table className="board-table">
        <thead>
          <tr>
            <th className="col-no">번호</th>
            <th>제목</th>
            <th className="col-author">작성자</th>
            <th className="col-date">작성일</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="col-no">{post.id}</td>
              <td>
                {post.notice && <span className="badge-info">공지</span>}
                {post.title}
              </td>
              <td className="col-author">{post.author}</td>
              <td className="col-date">{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
