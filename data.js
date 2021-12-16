var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.15138059838727358,
        "pitch": -0.06428524271810687,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.48168341886815824,
          "pitch": -0.38624803988961887,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.171529367457099,
          "pitch": 0.3090474725801471,
          "title": "About Engineering Fac",
          "text": "This is the NUS Faculty of Engineering - The umbrella for all engineering divisions. It is very easy to lose yourself in the halls of engg buildings!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.28876403132877293,
        "pitch": -0.12861399692415887,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.027150284862148766,
          "pitch": 0.028141142150277076,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2988266221827214,
          "pitch": -0.39854504787206757,
          "title": "About Engineering Auditiorium",
          "text": "Enter and learn that every building is interconnected!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.8885944759565376,
        "pitch": 0.05466904894855418,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 3.1316647154340576,
          "pitch": 0.005434175417484255,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7324019853917338,
          "pitch": 0.22978825863029684,
          "title": "About this place",
          "text": "Can grab coffee and study together la"
        }
      ]
    }
  ],
  "name": "Engineering Fac",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
