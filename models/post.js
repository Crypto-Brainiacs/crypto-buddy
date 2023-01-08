export default class Post {
name;
description;
likes;
comments;
fromAddress;
    constructor(data) {
        this.name = data[0];
        this.description = data[1];
        this.likes = data[2];
        this.comments = data[3];
        this.fromAddress = data[4];
    }
}
