import React, { useState, useEffect } from 'react';
import ActivityBox from './activityBox';
import '../../assets/components/Github/activityContainer.scss'

const ActivityContainer = () => {
  const [activity, setActivity] = useState([]);
  // temporal data
  const data = [
    {
        "id": "41435786985",
        "type": "PublicEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 569527221,
            "name": "xflasar/BDO-Grind-Tracker-OLD",
            "url": "https://api.github.com/repos/xflasar/BDO-Grind-Tracker-OLD"
        },
        "payload": {},
        "public": true,
        "created_at": "2024-08-29T00:15:07Z"
    },
    {
        "id": "41424958879",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 603713475,
            "name": "xflasar/SpaceEngineersScripts",
            "url": "https://api.github.com/repos/xflasar/SpaceEngineersScripts"
        },
        "payload": {
            "repository_id": 603713475,
            "push_id": 19977175265,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/main",
            "head": "64c60a5f26dbe8231c75748a73db17af664f7aba",
            "before": "3bd3264f48c41c627710621d4c1d2028c7d9930a",
            "commits": [
                {
                    "sha": "64c60a5f26dbe8231c75748a73db17af664f7aba",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Fix for PDC to have 0 slowdown on firerate.\nAdded run counter.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/SpaceEngineersScripts/commits/64c60a5f26dbe8231c75748a73db17af664f7aba"
                }
            ]
        },
        "public": true,
        "created_at": "2024-08-28T16:30:07Z"
    },
    {
        "id": "41390581892",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 19960181014,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/main",
            "head": "be900c6cc1a9897e73014a8bac706f4f39654576",
            "before": "eef78a64ed820fe389bac7fffc738d8501bfbd2d",
            "commits": [
                {
                    "sha": "be900c6cc1a9897e73014a8bac706f4f39654576",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Reworked localization, reworked and added tests for hooks and useContext, fixed rendering order for Overlay.\n\nAdded tests for hooks and useContext.\nFixed render order for Overlay and it's component.\nReworked localization to be separate for all overlay pages while not having conflict with Home localization data that is actively being used.\nRefactored some code into hooks.\nDisabled Projects page as Not Yet Implemented.\n\nContact page has old UX and UI needs updating.\nSkills projects list is not correctly updated and styled.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/be900c6cc1a9897e73014a8bac706f4f39654576"
                }
            ]
        },
        "public": true,
        "created_at": "2024-08-27T18:53:33Z"
    },
    {
        "id": "40678508402",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 618832427,
            "name": "xflasar/xflasar",
            "url": "https://api.github.com/repos/xflasar/xflasar"
        },
        "payload": {
            "repository_id": 618832427,
            "push_id": 19589965589,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/main",
            "head": "6d33865e6e77a5ba4bbaa176ebde78c9b395f133",
            "before": "d5bf44315c0875aa9103498a0c5a24a247118fcf",
            "commits": [
                {
                    "sha": "6d33865e6e77a5ba4bbaa176ebde78c9b395f133",
                    "author": {
                        "email": "48999474+xflasar@users.noreply.github.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Update README.md",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/xflasar/commits/6d33865e6e77a5ba4bbaa176ebde78c9b395f133"
                }
            ]
        },
        "public": true,
        "created_at": "2024-08-01T23:39:52Z"
    },
    {
        "id": "40670752663",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 836837063,
            "name": "xflasar/Atoraxxia",
            "url": "https://api.github.com/repos/xflasar/Atoraxxia"
        },
        "payload": {
            "repository_id": 836837063,
            "push_id": 19586217452,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/main",
            "head": "e1f6dca2329155f76f827c04926941b0b2c15fce",
            "before": "37c3a9894caafdaf4bb6a6b5b755449f38763667",
            "commits": [
                {
                    "sha": "e1f6dca2329155f76f827c04926941b0b2c15fce",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Fix - Readme, gitignore",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Atoraxxia/commits/e1f6dca2329155f76f827c04926941b0b2c15fce"
                }
            ]
        },
        "public": true,
        "created_at": "2024-08-01T17:58:33Z"
    },
    {
        "id": "40670694289",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 836837063,
            "name": "xflasar/Atoraxxia",
            "url": "https://api.github.com/repos/xflasar/Atoraxxia"
        },
        "payload": {
            "repository_id": 836837063,
            "push_id": 19586189710,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/main",
            "head": "37c3a9894caafdaf4bb6a6b5b755449f38763667",
            "before": "8926cf7877a0c34e86a230e7fd80e02cf6f6c5f9",
            "commits": [
                {
                    "sha": "37c3a9894caafdaf4bb6a6b5b755449f38763667",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Updated README with relevant data.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Atoraxxia/commits/37c3a9894caafdaf4bb6a6b5b755449f38763667"
                }
            ]
        },
        "public": true,
        "created_at": "2024-08-01T17:56:21Z"
    },
    {
        "id": "40669002311",
        "type": "CreateEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 836837063,
            "name": "xflasar/Atoraxxia",
            "url": "https://api.github.com/repos/xflasar/Atoraxxia"
        },
        "payload": {
            "ref": "main",
            "ref_type": "branch",
            "master_branch": "main",
            "description": "Atoraxxia is Black Desert Online web application tool for users to be recording their grind sessions and more. ( Client-side repository )",
            "pusher_type": "user"
        },
        "public": true,
        "created_at": "2024-08-01T16:55:41Z"
    },
    {
        "id": "40669002224",
        "type": "CreateEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 836837063,
            "name": "xflasar/Atoraxxia",
            "url": "https://api.github.com/repos/xflasar/Atoraxxia"
        },
        "payload": {
            "ref": null,
            "ref_type": "repository",
            "master_branch": "main",
            "description": "Atoraxxia is Black Desert Online web application tool for users to be recording their grind sessions and more. ( Client-side repository )",
            "pusher_type": "user"
        },
        "public": true,
        "created_at": "2024-08-01T16:55:41Z"
    },
    {
        "id": "39786382819",
        "type": "CreateEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 822895387,
            "name": "xflasar/FunPlace",
            "url": "https://api.github.com/repos/xflasar/FunPlace"
        },
        "payload": {
            "ref": null,
            "ref_type": "repository",
            "master_branch": "main",
            "description": "All sort of stuff neetly inside folders. Anything I come up wanting to be done is here.",
            "pusher_type": "user"
        },
        "public": true,
        "created_at": "2024-07-02T03:35:30Z"
    },
    {
        "id": "39776274277",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 19126989975,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/build",
            "head": "cfeb2f03e6ff73570e4b0c019f0af8222d661593",
            "before": "3b08cb317f676e04ba87bd33e4507318654d8631",
            "commits": [
                {
                    "sha": "cfeb2f03e6ff73570e4b0c019f0af8222d661593",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Updates",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/cfeb2f03e6ff73570e4b0c019f0af8222d661593"
                }
            ]
        },
        "public": true,
        "created_at": "2024-07-01T18:15:57Z"
    },
    {
        "id": "39776042936",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 19126872095,
            "size": 18,
            "distinct_size": 0,
            "ref": "refs/heads/main",
            "head": "eef78a64ed820fe389bac7fffc738d8501bfbd2d",
            "before": "201bf0a25fb4ea134eed37f6b50e7cdbe5a33144",
            "commits": [
                {
                    "sha": "2105aa2951323a20194a0b011128587153209abb",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Added ProjectViewer component into Projects (Base version). (WIP)",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/2105aa2951323a20194a0b011128587153209abb"
                },
                {
                    "sha": "8baffb4ed4106d60750d7683d7f8b77bd336ffea",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Small Styling for viewer. ( Set General Style Design )",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/8baffb4ed4106d60750d7683d7f8b77bd336ffea"
                },
                {
                    "sha": "d48d486e29e6e53a1b5d648258a3fab779a1ce6e",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Merge branch 'main' into ProjectsViewer",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/d48d486e29e6e53a1b5d648258a3fab779a1ce6e"
                },
                {
                    "sha": "ba63e65733b3402758b8c8c2879bbe4a7325386b",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Fix for Projects not showing all of items. ProjectViewer slider functional (WIP).",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/ba63e65733b3402758b8c8c2879bbe4a7325386b"
                },
                {
                    "sha": "0d5a70b081c403b17231d97b79707047c97581c9",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "ProjectViewer ImageSlider finished functionality (Minor adjustments needed). Changed a bit Info section.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/0d5a70b081c403b17231d97b79707047c97581c9"
                },
                {
                    "sha": "5ea861ef490e08c8eccd183d275434580a2f27a1",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Slider finished might need some minor adjustments. Info section modified ( Need some final touches WIP). Modified Style and removed unused styling.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/5ea861ef490e08c8eccd183d275434580a2f27a1"
                },
                {
                    "sha": "c1b576afd58c42b38e00c6efbdb15e22798c9fc1",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Changed Close button style.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/c1b576afd58c42b38e00c6efbdb15e22798c9fc1"
                },
                {
                    "sha": "ccd075ea543ccf5b82ec80a8218fa01247ff4ebd",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Small change to position of close button. Added loading animation.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/ccd075ea543ccf5b82ec80a8218fa01247ff4ebd"
                },
                {
                    "sha": "bb29ebff5a1de2ab955d223ac99845bf67913e05",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Fixed sliding animation of images to be smoother.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/bb29ebff5a1de2ab955d223ac99845bf67913e05"
                },
                {
                    "sha": "c53085cbffabe276ea0fdaa10ec1c50e3730394e",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Merge branch 'main' into ProjectsViewer",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/c53085cbffabe276ea0fdaa10ec1c50e3730394e"
                },
                {
                    "sha": "7bd25f182077f04953700dc31dee88d888e9d15d",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Update to eslint v8.. Merge to new Branch.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/7bd25f182077f04953700dc31dee88d888e9d15d"
                },
                {
                    "sha": "aa9ae3d7e32acda7d77fee16c686138b4e71367d",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Rewrite of Skills Page. Base layout finished. Small modifications to skills items.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/aa9ae3d7e32acda7d77fee16c686138b4e71367d"
                },
                {
                    "sha": "641eb48c023dc97a89e74f84bb890e069d9d5d54",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Major Reformating. Fix for GraphQl data.\n\nDivided ProjectsSection and InfoSection into separate .jsx and .scss and reworked scss.\n\nSkills page reformating and rework for desktop.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/641eb48c023dc97a89e74f84bb890e069d9d5d54"
                },
                {
                    "sha": "885b96cfcb6e0122f432f3addcec787cf09f1da3",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Fixed ProjectsSection shadow calculation to be correctly switched when at the end of scrolling. Overlay now has background blur added.\n\nFixed ProjectsSection shadow calculation with flooring to get full number instead decimal. Added Overlay blur to get blurry background to Overlay component.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/885b96cfcb6e0122f432f3addcec787cf09f1da3"
                },
                {
                    "sha": "07ef1e18cbabf540d60d76c63938d0e5ed801f97",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Reworked CSS style for Project item description. Added Javascript skill and edited other skills level percentage. Fix for Project onClick to return project object.\n\nProject item description changed background added blur and made it cover whole item.\nSmall changes to Skill.json with added skill Javascript and Skill level percentage edit. Added image for Javascript and edited HTML image.\nProject onClick was returning event of onClick and index of the Project. Now it returns Project object.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/07ef1e18cbabf540d60d76c63938d0e5ed801f97"
                },
                {
                    "sha": "7a38a607837520a2230ed01577dbd0f30bac8698",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Ran npm dedupe to update depencency and remove duped ones.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/7a38a607837520a2230ed01577dbd0f30bac8698"
                },
                {
                    "sha": "19721ee5c912fe11fcf08d050a0b4c68b65ddee0",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Small changes to skill.json data and updates in color display for experience threshold. Projects now have outline when on hover.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/19721ee5c912fe11fcf08d050a0b4c68b65ddee0"
                },
                {
                    "sha": "eef78a64ed820fe389bac7fffc738d8501bfbd2d",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Updated InfoSection styling. Box shadow for Skill item.",
                    "distinct": false,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/eef78a64ed820fe389bac7fffc738d8501bfbd2d"
                }
            ]
        },
        "public": true,
        "created_at": "2024-07-01T18:06:57Z"
    },
    {
        "id": "39775980264",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 19126840898,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/SkillsPage",
            "head": "eef78a64ed820fe389bac7fffc738d8501bfbd2d",
            "before": "19721ee5c912fe11fcf08d050a0b4c68b65ddee0",
            "commits": [
                {
                    "sha": "eef78a64ed820fe389bac7fffc738d8501bfbd2d",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Updated InfoSection styling. Box shadow for Skill item.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/eef78a64ed820fe389bac7fffc738d8501bfbd2d"
                }
            ]
        },
        "public": true,
        "created_at": "2024-07-01T18:04:27Z"
    },
    {
        "id": "39614689914",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 19043250895,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/SkillsPage",
            "head": "19721ee5c912fe11fcf08d050a0b4c68b65ddee0",
            "before": "7a38a607837520a2230ed01577dbd0f30bac8698",
            "commits": [
                {
                    "sha": "19721ee5c912fe11fcf08d050a0b4c68b65ddee0",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Small changes to skill.json data and updates in color display for experience threshold. Projects now have outline when on hover.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/19721ee5c912fe11fcf08d050a0b4c68b65ddee0"
                }
            ]
        },
        "public": true,
        "created_at": "2024-06-25T21:02:21Z"
    },
    {
        "id": "39540580285",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 19006159637,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/SkillsPage",
            "head": "7a38a607837520a2230ed01577dbd0f30bac8698",
            "before": "07ef1e18cbabf540d60d76c63938d0e5ed801f97",
            "commits": [
                {
                    "sha": "7a38a607837520a2230ed01577dbd0f30bac8698",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Ran npm dedupe to update depencency and remove duped ones.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/7a38a607837520a2230ed01577dbd0f30bac8698"
                }
            ]
        },
        "public": true,
        "created_at": "2024-06-23T17:29:56Z"
    },
    {
        "id": "39540568404",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 19006153891,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/SkillsPage",
            "head": "07ef1e18cbabf540d60d76c63938d0e5ed801f97",
            "before": "885b96cfcb6e0122f432f3addcec787cf09f1da3",
            "commits": [
                {
                    "sha": "07ef1e18cbabf540d60d76c63938d0e5ed801f97",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Reworked CSS style for Project item description. Added Javascript skill and edited other skills level percentage. Fix for Project onClick to return project object.\n\nProject item description changed background added blur and made it cover whole item.\nSmall changes to Skill.json with added skill Javascript and Skill level percentage edit. Added image for Javascript and edited HTML image.\nProject onClick was returning event of onClick and index of the Project. Now it returns Project object.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/07ef1e18cbabf540d60d76c63938d0e5ed801f97"
                }
            ]
        },
        "public": true,
        "created_at": "2024-06-23T17:28:56Z"
    },
    {
        "id": "39533704042",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 19001933266,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/SkillsPage",
            "head": "885b96cfcb6e0122f432f3addcec787cf09f1da3",
            "before": "641eb48c023dc97a89e74f84bb890e069d9d5d54",
            "commits": [
                {
                    "sha": "885b96cfcb6e0122f432f3addcec787cf09f1da3",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Fixed ProjectsSection shadow calculation to be correctly switched when at the end of scrolling. Overlay now has background blur added.\n\nFixed ProjectsSection shadow calculation with flooring to get full number instead decimal. Added Overlay blur to get blurry background to Overlay component.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/885b96cfcb6e0122f432f3addcec787cf09f1da3"
                }
            ]
        },
        "public": true,
        "created_at": "2024-06-23T05:59:10Z"
    },
    {
        "id": "39519102768",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 18992567279,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/SkillsPage",
            "head": "641eb48c023dc97a89e74f84bb890e069d9d5d54",
            "before": "aa9ae3d7e32acda7d77fee16c686138b4e71367d",
            "commits": [
                {
                    "sha": "641eb48c023dc97a89e74f84bb890e069d9d5d54",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Major Reformating. Fix for GraphQl data.\n\nDivided ProjectsSection and InfoSection into separate .jsx and .scss and reworked scss.\n\nSkills page reformating and rework for desktop.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/641eb48c023dc97a89e74f84bb890e069d9d5d54"
                }
            ]
        },
        "public": true,
        "created_at": "2024-06-22T00:07:23Z"
    },
    {
        "id": "39134987438",
        "type": "CreateEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 812437888,
            "name": "xflasar/Starbase",
            "url": "https://api.github.com/repos/xflasar/Starbase"
        },
        "payload": {
            "ref": "main",
            "ref_type": "branch",
            "master_branch": "main",
            "description": "Yolol scripts for Starbase",
            "pusher_type": "user"
        },
        "public": true,
        "created_at": "2024-06-09T21:27:40Z"
    },
    {
        "id": "39133889984",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 18799016277,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/SkillsPage",
            "head": "aa9ae3d7e32acda7d77fee16c686138b4e71367d",
            "before": "7bd25f182077f04953700dc31dee88d888e9d15d",
            "commits": [
                {
                    "sha": "aa9ae3d7e32acda7d77fee16c686138b4e71367d",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Rewrite of Skills Page. Base layout finished. Small modifications to skills items.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/aa9ae3d7e32acda7d77fee16c686138b4e71367d"
                }
            ]
        },
        "public": true,
        "created_at": "2024-06-09T19:20:38Z"
    },
    {
        "id": "39133878002",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 18799008580,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/SkillsPage",
            "head": "7bd25f182077f04953700dc31dee88d888e9d15d",
            "before": "c53085cbffabe276ea0fdaa10ec1c50e3730394e",
            "commits": [
                {
                    "sha": "7bd25f182077f04953700dc31dee88d888e9d15d",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Update to eslint v8.. Merge to new Branch.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/7bd25f182077f04953700dc31dee88d888e9d15d"
                }
            ]
        },
        "public": true,
        "created_at": "2024-06-09T19:19:11Z"
    },
    {
        "id": "39131856982",
        "type": "CreateEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "ref": "SkillsPage",
            "ref_type": "branch",
            "master_branch": "main",
            "description": null,
            "pusher_type": "user"
        },
        "public": true,
        "created_at": "2024-06-09T15:42:42Z"
    },
    {
        "id": "39131794475",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 18797667193,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/main",
            "head": "201bf0a25fb4ea134eed37f6b50e7cdbe5a33144",
            "before": "7cc30efe2bb76fa904ce34543f482476f775c034",
            "commits": [
                {
                    "sha": "201bf0a25fb4ea134eed37f6b50e7cdbe5a33144",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Updated dependencies, added plugin to deploy to github pages.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/201bf0a25fb4ea134eed37f6b50e7cdbe5a33144"
                }
            ]
        },
        "public": true,
        "created_at": "2024-06-09T15:36:05Z"
    },
    {
        "id": "39131279246",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 18797340232,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/build",
            "head": "3b08cb317f676e04ba87bd33e4507318654d8631",
            "before": "cd8d9cebcbe72c784692d8f049f1f2c25fbdd39d",
            "commits": [
                {
                    "sha": "3b08cb317f676e04ba87bd33e4507318654d8631",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Updates",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/3b08cb317f676e04ba87bd33e4507318654d8631"
                }
            ]
        },
        "public": true,
        "created_at": "2024-06-09T14:45:04Z"
    },
    {
        "id": "39131243391",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 18797317307,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/build",
            "head": "cd8d9cebcbe72c784692d8f049f1f2c25fbdd39d",
            "before": "16d03454df84a533094932a9df2b4134baaa352d",
            "commits": [
                {
                    "sha": "cd8d9cebcbe72c784692d8f049f1f2c25fbdd39d",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Updates",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/cd8d9cebcbe72c784692d8f049f1f2c25fbdd39d"
                }
            ]
        },
        "public": true,
        "created_at": "2024-06-09T14:41:15Z"
    },
    {
        "id": "39131058344",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "repository_id": 681226162,
            "push_id": 18797200667,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/build",
            "head": "16d03454df84a533094932a9df2b4134baaa352d",
            "before": "7cc30efe2bb76fa904ce34543f482476f775c034",
            "commits": [
                {
                    "sha": "16d03454df84a533094932a9df2b4134baaa352d",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Updates",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/Portfolio/commits/16d03454df84a533094932a9df2b4134baaa352d"
                }
            ]
        },
        "public": true,
        "created_at": "2024-06-09T14:23:17Z"
    },
    {
        "id": "39131015231",
        "type": "CreateEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 681226162,
            "name": "xflasar/Portfolio",
            "url": "https://api.github.com/repos/xflasar/Portfolio"
        },
        "payload": {
            "ref": "build",
            "ref_type": "branch",
            "master_branch": "main",
            "description": null,
            "pusher_type": "user"
        },
        "public": true,
        "created_at": "2024-06-09T14:20:06Z"
    },
    {
        "id": "39123131696",
        "type": "CreateEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 812437888,
            "name": "xflasar/Starbase",
            "url": "https://api.github.com/repos/xflasar/Starbase"
        },
        "payload": {
            "ref": null,
            "ref_type": "repository",
            "master_branch": "main",
            "description": "Yolol scripts for Starbase",
            "pusher_type": "user"
        },
        "public": true,
        "created_at": "2024-06-08T22:25:54Z"
    },
    {
        "id": "39070949685",
        "type": "PushEvent",
        "actor": {
            "id": 48999474,
            "login": "xflasar",
            "display_login": "xflasar",
            "gravatar_id": "",
            "url": "https://api.github.com/users/xflasar",
            "avatar_url": "https://avatars.githubusercontent.com/u/48999474?"
        },
        "repo": {
            "id": 603713475,
            "name": "xflasar/SpaceEngineersScripts",
            "url": "https://api.github.com/repos/xflasar/SpaceEngineersScripts"
        },
        "payload": {
            "repository_id": 603713475,
            "push_id": 18765210733,
            "size": 2,
            "distinct_size": 2,
            "ref": "refs/heads/main",
            "head": "3bd3264f48c41c627710621d4c1d2028c7d9930a",
            "before": "52e7892bda2b8063afa96795d1c15c936447edad",
            "commits": [
                {
                    "sha": "19b1dbf9b738044484ea7c152415726cf01abdc3",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Updated Shield Print status.\n\nPossible fix for script too complex error.\n\nAdded management of hydro engines and batteries.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/SpaceEngineersScripts/commits/19b1dbf9b738044484ea7c152415726cf01abdc3"
                },
                {
                    "sha": "3bd3264f48c41c627710621d4c1d2028c7d9930a",
                    "author": {
                        "email": "christian.flasar@gmail.com",
                        "name": "Martin Flasar"
                    },
                    "message": "Added PlatformManager for managing shields and wepons via target in range -> triggering timerblock.",
                    "distinct": true,
                    "url": "https://api.github.com/repos/xflasar/SpaceEngineersScripts/commits/3bd3264f48c41c627710621d4c1d2028c7d9930a"
                }
            ]
        },
        "public": true,
        "created_at": "2024-06-06T18:14:21Z"
    }
]
  async function fetchGitActivityData() {
    try {
      //const response = await fetch('https://api.github.com/users/xflasar/events');
      //const data = await response.json();
      
      const res = await fetch('https://hlcbqfv6-8099.euw.devtunnels.ms/git-hub') // http://localhost:8099/git-hub
      const dataRes = await res.json()
      console.log(dataRes + "Run")

      setActivity(dataRes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchGitActivityData();
    const fetchActivityInterval = setInterval(fetchGitActivityData, 1000 * 60 * 5);

    return () => clearInterval(fetchActivityInterval);
  }, []);

  return (
    <div className="activity-container">
      <ActivityBox activity={activity} />
    </div>
  );
};

export default ActivityContainer;
