document.querySelectorAll('.post').forEach(post => {
  const likeBtn = post.querySelector('.like-btn');
  const likeCountSpan = post.querySelector('.like-count');
  const commentBtn = post.querySelector('.comment-btn');
  const commentsSection = post.querySelector('.comments-section');
  const addCommentBtn = post.querySelector('.add-comment-btn');
  const commentsList = post.querySelector('.comments-list');
  const commentTextarea = post.querySelector('textarea');
  const shareBtn = post.querySelector('.share-btn');
  const saveBtn = post.querySelector('.save-btn');

  let likes = 0;
  let saved = false;

  likeBtn.addEventListener('click', () => {
    likes++;
    likeCountSpan.textContent = likes;
  });

  commentBtn.addEventListener('click', () => {
    commentsSection.classList.toggle('hidden');
  });

  addCommentBtn.addEventListener('click', () => {
    const commentText = commentTextarea.value.trim();
    if (commentText) {
      const newComment = document.createElement('li');
      newComment.textContent = commentText;
      commentsList.appendChild(newComment);
      commentTextarea.value = '';
    }
  });

  shareBtn.addEventListener('click', () => {
    const postTitle = post.querySelector('h2').textContent;
    const postUrl = window.location.href + '#' + encodeURIComponent(postTitle.replace(/\s+/g, '-').toLowerCase());
    if (navigator.share) {
      navigator.share({
        title: postTitle,
        url: postUrl
      }).catch(() => {
        alert('Compartilhamento não disponível.');
      });
    } else {
      prompt('Copie o link para compartilhar:', postUrl);
    }
  });

  saveBtn.addEventListener('click', () => {
    saved = !saved;
    saveBtn.textContent = saved ? '💾 Salvo' : '💾 Salvar';
    saveBtn.style.backgroundColor = saved ? '#28a745' : '#0078d7'; // verde se salvo
  });
});
