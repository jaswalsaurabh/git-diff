const commitData = {
  sha: "6d36828931d14c8e3a2c8acd990013d68995a094",
  node_id:
    "C_kwDOLC83dNoAKDZkMzY4Mjg5MzFkMTRjOGUzYTJjOGFjZDk5MDAxM2Q2ODk5NWEwOTQ",
  commit: {
    author: {
      name: "saurabh-jaswal",
      email: "jaswalsaurabhjnv@gmail.com",
      date: "2024-01-16T18:40:44Z",
    },
    committer: {
      name: "saurabh-jaswal",
      email: "jaswalsaurabhjnv@gmail.com",
      date: "2024-01-16T18:40:44Z",
    },
    message: "connection done",
    tree: {
      sha: "e4b37e14fb0ef505cce111a01b7c3df7bae66338",
      url: "https://api.github.com/repos/jaswalsaurabh/omegle-better/git/trees/e4b37e14fb0ef505cce111a01b7c3df7bae66338",
    },
    url: "https://api.github.com/repos/jaswalsaurabh/omegle-better/git/commits/6d36828931d14c8e3a2c8acd990013d68995a094",
    comment_count: 0,
    verification: {
      verified: false,
      reason: "unsigned",
      signature: null,
      payload: null,
    },
  },
  url: "https://api.github.com/repos/jaswalsaurabh/omegle-better/commits/6d36828931d14c8e3a2c8acd990013d68995a094",
  html_url:
    "https://github.com/jaswalsaurabh/omegle-better/commit/6d36828931d14c8e3a2c8acd990013d68995a094",
  comments_url:
    "https://api.github.com/repos/jaswalsaurabh/omegle-better/commits/6d36828931d14c8e3a2c8acd990013d68995a094/comments",
  author: {
    login: "jaswalsaurabh",
    id: 70649392,
    node_id: "MDQ6VXNlcjcwNjQ5Mzky",
    avatar_url: "https://avatars.githubusercontent.com/u/70649392?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/jaswalsaurabh",
    html_url: "https://github.com/jaswalsaurabh",
    followers_url: "https://api.github.com/users/jaswalsaurabh/followers",
    following_url:
      "https://api.github.com/users/jaswalsaurabh/following{/other_user}",
    gists_url: "https://api.github.com/users/jaswalsaurabh/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/jaswalsaurabh/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/jaswalsaurabh/subscriptions",
    organizations_url: "https://api.github.com/users/jaswalsaurabh/orgs",
    repos_url: "https://api.github.com/users/jaswalsaurabh/repos",
    events_url: "https://api.github.com/users/jaswalsaurabh/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/jaswalsaurabh/received_events",
    type: "User",
    site_admin: false,
  },
  committer: {
    login: "jaswalsaurabh",
    id: 70649392,
    node_id: "MDQ6VXNlcjcwNjQ5Mzky",
    avatar_url: "https://avatars.githubusercontent.com/u/70649392?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/jaswalsaurabh",
    html_url: "https://github.com/jaswalsaurabh",
    followers_url: "https://api.github.com/users/jaswalsaurabh/followers",
    following_url:
      "https://api.github.com/users/jaswalsaurabh/following{/other_user}",
    gists_url: "https://api.github.com/users/jaswalsaurabh/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/jaswalsaurabh/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/jaswalsaurabh/subscriptions",
    organizations_url: "https://api.github.com/users/jaswalsaurabh/orgs",
    repos_url: "https://api.github.com/users/jaswalsaurabh/repos",
    events_url: "https://api.github.com/users/jaswalsaurabh/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/jaswalsaurabh/received_events",
    type: "User",
    site_admin: false,
  },
  parents: [
    {
      sha: "7503acc6a06361021e1acb60db6bf51fcd9a2305",
      url: "https://api.github.com/repos/jaswalsaurabh/omegle-better/commits/7503acc6a06361021e1acb60db6bf51fcd9a2305",
      html_url:
        "https://github.com/jaswalsaurabh/omegle-better/commit/7503acc6a06361021e1acb60db6bf51fcd9a2305",
    },
  ],
  stats: {
    total: 54,
    additions: 39,
    deletions: 15,
  },
  files: [
    {
      sha: "8a15370e75f324cace6e4cea804d712f49822d33",
      filename: "backend/dist/Managers/RoomManager.js",
      status: "modified",
      additions: 20,
      deletions: 9,
      changes: 29,
      blob_url:
        "https://github.com/jaswalsaurabh/omegle-better/blob/6d36828931d14c8e3a2c8acd990013d68995a094/backend%2Fdist%2FManagers%2FRoomManager.js",
      raw_url:
        "https://github.com/jaswalsaurabh/omegle-better/raw/6d36828931d14c8e3a2c8acd990013d68995a094/backend%2Fdist%2FManagers%2FRoomManager.js",
      contents_url:
        "https://api.github.com/repos/jaswalsaurabh/omegle-better/contents/backend%2Fdist%2FManagers%2FRoomManager.js?ref=6d36828931d14c8e3a2c8acd990013d68995a094",
      patch:
        '@@ -17,35 +17,46 @@ class RoomManager {\n             roomId,\n         });\n     }\n-    onOffer(roomId, sdp) {\n-        var _a;\n+    onOffer(roomId, sdp, senderSocketId) {\n         // console.log(\'this is receiber roomId\',roomId);\n         // console.log(\'this is receiber sdp\',sdp);\n         console.log("on Offer");\n-        const user2 = (_a = this.rooms.get(roomId)) === null || _a === void 0 ? void 0 : _a.user2;\n+        const room = this.rooms.get(roomId);\n+        if (!room) {\n+            return;\n+        }\n+        const receivingUser = room.user1.socket.id === senderSocketId ? room.user1 : room.user2;\n         // console.log("user2", user2);\n-        user2 === null || user2 === void 0 ? void 0 : user2.socket.emit("offer", {\n+        receivingUser === null || receivingUser === void 0 ? void 0 : receivingUser.socket.emit("offer", {\n             sdp,\n             roomId,\n         });\n     }\n-    onAnswer(roomId, sdp) {\n-        var _a;\n+    onAnswer(roomId, sdp, senderSocketId) {\n         console.log("on Offer");\n-        const user1 = (_a = this.rooms.get(roomId)) === null || _a === void 0 ? void 0 : _a.user1;\n         // console.log("user1", user1);\n-        user1 === null || user1 === void 0 ? void 0 : user1.socket.emit("answer", {\n+        const room = this.rooms.get(roomId);\n+        if (!room) {\n+            return;\n+        }\n+        const receivingUser = room.user1.socket.id === senderSocketId ? room.user1 : room.user2;\n+        receivingUser === null || receivingUser === void 0 ? void 0 : receivingUser.socket.emit("answer", {\n             sdp,\n             roomId,\n         });\n     }\n     onIceCandidate(roomId, senderSocketId, candidate, type) {\n+        console.log("><><><><><><><>< ICE CANDIDATE");\n+        // console.log("roomId", roomId);\n+        // console.log("senderSocketId", senderSocketId);\n+        // console.log("candidate", candidate);\n+        // console.log("type", type);\n         const room = this.rooms.get(roomId);\n         if (!room) {\n             return;\n         }\n         const receivingUser = room.user1.socket.id === senderSocketId ? room.user1 : room.user2;\n-        receivingUser.socket.send("add-ice-candidate", { candidate, type });\n+        receivingUser.socket.emit("add-ice-candidate", { candidate, type });\n     }\n     generate() {\n         return GLBOAL_ROOM_ID++;',
    },
    {
      sha: "c7ff01c881958869b4e785e5ef1c9c69c36f302b",
      filename: "backend/dist/Managers/UserManager.js",
      status: "modified",
      additions: 2,
      deletions: 2,
      changes: 4,
      blob_url:
        "https://github.com/jaswalsaurabh/omegle-better/blob/6d36828931d14c8e3a2c8acd990013d68995a094/backend%2Fdist%2FManagers%2FUserManager.js",
      raw_url:
        "https://github.com/jaswalsaurabh/omegle-better/raw/6d36828931d14c8e3a2c8acd990013d68995a094/backend%2Fdist%2FManagers%2FUserManager.js",
      contents_url:
        "https://api.github.com/repos/jaswalsaurabh/omegle-better/contents/backend%2Fdist%2FManagers%2FUserManager.js?ref=6d36828931d14c8e3a2c8acd990013d68995a094",
      patch:
        '@@ -47,11 +47,11 @@ class UserManager {\n         socket.on("offer", ({ sdp, roomId }) => {\n             console.log("inside offer");\n             // console.log("inside roomId", roomId);\n-            this.roomManager.onOffer(roomId, sdp);\n+            this.roomManager.onOffer(roomId, sdp, socket.id);\n         });\n         socket.on("answer", ({ sdp, roomId }) => {\n             console.log("inside answer");\n-            this.roomManager.onAnswer(roomId, sdp);\n+            this.roomManager.onAnswer(roomId, sdp, socket.id);\n         });\n         socket.on("add-ice-candidate", ({ candidate, roomId, type }) => {\n             this.roomManager.onIceCandidate(roomId, socket.id, candidate, type);',
    },
    {
      sha: "d5f13df35cd8bff137aa6172ede609fe2a827a00",
      filename: "backend/src/Managers/RoomManager.ts",
      status: "modified",
      additions: 9,
      deletions: 1,
      changes: 10,
      blob_url:
        "https://github.com/jaswalsaurabh/omegle-better/blob/6d36828931d14c8e3a2c8acd990013d68995a094/backend%2Fsrc%2FManagers%2FRoomManager.ts",
      raw_url:
        "https://github.com/jaswalsaurabh/omegle-better/raw/6d36828931d14c8e3a2c8acd990013d68995a094/backend%2Fsrc%2FManagers%2FRoomManager.ts",
      contents_url:
        "https://api.github.com/repos/jaswalsaurabh/omegle-better/contents/backend%2Fsrc%2FManagers%2FRoomManager.ts?ref=6d36828931d14c8e3a2c8acd990013d68995a094",
      patch:
        '@@ -59,14 +59,22 @@ export class RoomManager {\n     candidate: any,\n     type: "sender" | "receiver"\n   ) {\n+    console.log("><><><><><><><>< ICE CANDIDATE");\n+    // console.log("roomId", roomId);\n+    // console.log("senderSocketId", senderSocketId);\n+    // console.log("candidate", candidate);\n+    // console.log("type", type);\n+\n     const room = this.rooms.get(roomId);\n     if (!room) {\n       return;\n     }\n+\n     const receivingUser =\n       room.user1.socket.id === senderSocketId ? room.user1 : room.user2;\n-    receivingUser.socket.send("add-ice-candidate", { candidate, type });\n+    receivingUser.socket.emit("add-ice-candidate", { candidate, type });\n   }\n+\n   generate() {\n     return GLBOAL_ROOM_ID++;\n   }',
    },
    {
      sha: "25f0ccc9f97e4bd178c2bfd7e2a57a440ec1f0f0",
      filename: "frontend/src/components/Room.tsx",
      status: "modified",
      additions: 8,
      deletions: 3,
      changes: 11,
      blob_url:
        "https://github.com/jaswalsaurabh/omegle-better/blob/6d36828931d14c8e3a2c8acd990013d68995a094/frontend%2Fsrc%2Fcomponents%2FRoom.tsx",
      raw_url:
        "https://github.com/jaswalsaurabh/omegle-better/raw/6d36828931d14c8e3a2c8acd990013d68995a094/frontend%2Fsrc%2Fcomponents%2FRoom.tsx",
      contents_url:
        "https://api.github.com/repos/jaswalsaurabh/omegle-better/contents/frontend%2Fsrc%2Fcomponents%2FRoom.tsx?ref=6d36828931d14c8e3a2c8acd990013d68995a094",
      patch:
        '@@ -57,6 +57,7 @@ function Room({\n           socket.emit("add-ice-candidate", {\n             candidate: e.candidate,\n             type: "sender",\n+            roomId,\n           });\n           // pc.addIceCandidate(e.candidate);\n         }\n@@ -101,12 +102,16 @@ function Room({\n           socket.emit("add-ice-candidate", {\n             candidate: e.candidate,\n             type: "receiver",\n+            roomId,\n           });\n           // pc.addIceCandidate(e.candidate);\n         }\n       };\n \n-      pc.ontrack = ({ track, type }) => {\n+      pc.ontrack = (e) => {\n+        console.log("this is on track ,",e);\n+        \n+        const {type,track} = e\n         if (type == "audio") {\n           // setRemoteAudioTrack(track);\n           // @ts-ignore\n@@ -144,12 +149,12 @@ function Room({\n       console.log("{ candidate, type }", { candidate, type });\n \n       if (type == "sender") {\n-        setSendingPC((pc) => {\n+        setReceivingPC((pc) => {\n           pc?.addIceCandidate(candidate);\n           return pc;\n         });\n       } else {\n-        setReceivingPC((pc) => {\n+        setSendingPC((pc) => {\n           pc?.addIceCandidate(candidate);\n           return pc;\n         });',
    },
  ],
};

module.exports = commitData;
