/**
 * Vernetic Framework
 * Website : https://vernetic.io
 * Version : 2023
 * Author  : Tom Papatolis
 * ◌⎯⎯⎯⎯⎯⎯◖ Content ◗⎯⎯⎯⎯⎯⎯◌
 */

/**
 * Load More Posts
 */

export function loadMorePosts() {
    const morePostsButton = document.querySelector('.load-more-posts');
    if ( !morePostsButton ) {return;} // Check if needed

    const loadMoreWrapper = document.querySelector('.load-more-posts-wrapper');

    // Show Hide More Button
    const showHideMoreButton = ()=> {
        const countPosts = document.querySelectorAll('.posts-list .card').length;
        const maxPosts   = document.querySelector('.posts-list').dataset.maxPosts;

        if (countPosts < maxPosts) {
            loadMoreWrapper.classList.remove('hidden');
        } else {
            loadMoreWrapper.classList.add('hidden');
        }
    }

    window.addEventListener('load', () => {showHideMoreButton()});

    morePostsButton.addEventListener('click', () => {

        morePostsButton.blur();
        morePostsButton.classList.add('animate');

        // Attributes
        let offset = morePostsButton.dataset.offset;
        const step = morePostsButton.dataset.step;
        if ( offset == 0 ) {offset = step;}

        // Optional Attributes
        let topicId = 0;
        if ( morePostsButton.hasAttribute('data-topic-id') ) {topicId = morePostsButton.dataset.topicId;}

        let userId = 0;
        if ( morePostsButton.hasAttribute('data-user-id') ) {userId = morePostsButton.dataset.userId;}

        let contentId = 0;
        if ( morePostsButton.hasAttribute('data-content-id') ) {contentId = morePostsButton.dataset.contentId;}

        // Package Data
        const data   = {offset: offset, topic_id: topicId, user_id: userId, content_id: contentId};
        const path   = morePostsButton.dataset.path;
        const params = {method: "post", body: JSON.stringify(data)};

        fetch(path, params).then(function (response) {
            return response.text();
        }).then(function (html) {
            morePostsButton.dataset.offset = parseInt(offset) + parseInt(step);
            loadMoreWrapper.insertAdjacentHTML('beforebegin', html);
            morePostsButton.classList.remove('animate');
            showHideMoreButton();
        }).catch(function (err) {
            console.warn('Something went wrong.', err);
        });


    });

}

