export const transformComment = (dbComment) => ({
    id: dbComment.id,
    author: dbComment.login,
    postId: dbComment.post_id,
    authorId: dbComment.author_id,
    publishedAt: dbComment.published_at,
    content: dbComment.content,
}) 