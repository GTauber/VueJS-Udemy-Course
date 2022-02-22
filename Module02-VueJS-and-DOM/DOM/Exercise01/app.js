new Vue({
    el: '#challange',
    data: {
        name: 'Gabriel',
        age: '21',
        beauty: 'https://lh3.googleusercontent.com/fOeCT5FoiwqblRhfZtj13mHUB53dXVakJsqVAWRKqhupTEtlmFVhrUotE5-Kic2ZI8A9xVwCV4dmVR1OoW'
       + 'AzozpbSkpi8xAW5IkWBOzc7HZOTI0o3lvPniSoQDSylqtMdUXSS3FhWARU9JKyBtUTzSCrn3io7uCPWWuNbksXsBP0BSSg4H2xurJv3YVUUzcLXcXxK6YS2n8QH'
       + '5oH1eO5LKjuvh1G76znNs0Z9JKxBVtMZeOqbe7EpiaCwMZp2eiidR-dcOGinedj_v_a2VKe8BWPWaWQu5fAXzN1YYQu6qVxwKJzGR1Xctt7Eyn0ECZ3yt1Sry'
       + '8PcN-XVjeKynTq59NU2TEBHLJEz9vHstuWBA-vOjVo6KJAxZgXyX1h_7WVuhoJwGdln8dh0DLmP7TpVFuv_K8nP2pnY3yfB4KvOOglvijJLjteQq8Bgrp5reWoN'
       + 'GZfavC1on6Y2et5XStKT9hq6_n9lKcHEABRKsHF_1ChNt7RdxP_poWSPDliaOub9J-gDNDHnbZFZkkH71xx-KNKxq701xP8MLjbDUPVwgTaMMEYHP69UV1LvAx1'
       + 'PVpC8LwpW9ZV2J6b0SML9DW47uxaqq_qkO34m9B9JSqo5AwoX4JDsADBTDBRwSOm2Lbe1EOj9HkAKHveRsPNusHgeRniFoiMd8t9B_ybudI5Q_Td3btkMLgD4L'
       + 'yRFYIuT1Jejyx0RQeKc7HYeD8UpY7JSEU=w533-h710-no?authuser=0',
    },
    methods: {
        namePlusAge: function() {
            return this.name + " is " + this.age + " years old";
        },
        generateRandom: function() {
            return Math.random();
        }
    }
})