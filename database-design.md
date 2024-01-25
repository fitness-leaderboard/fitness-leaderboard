# Project Database Design

## Users Collection

- **\_id:** ObjectId
- **firstName:** First Name
- **lastName:** Last Name
- **username:** unique_username
- **email:** user@northeastern.edu
- **hashedPassword:** hashed_password
- **badges:**
  - *List of badges*
- **placements:**
  - *List of season, placement pairs*
  - **[(season, placement), ...]** [(seasonId: 1, placement: 10), (seasonId: 2, placement: 1)] (This is enough info to know activity, start/end date, placement, and more)


## Ongoing Leaderboards

### Running

- **\_id:** ObjectId (activity # + season#)
- **activityType:** Running
- **seasonStart:** mm/dd/yyyy
- **seasonEnd:** mm/dd/yyyy
- **active:** False (Could be calculated based on seasonEnd)
- **users:**
  - **userId:** ObjectId
  - **totalMileage:** 100
  - **averagePace:** 10:00/mi mm:ss / mi
    - *Whatever we can get from Strava*
    - *Whatever we can get from Strava*

### Biking
- **\_id:** ObjectId 
- **activityType:** Biking
- **seasonId:** id
- **users:** *List*
  - **userId:** ObjectId
  - **totalMileage:** 100
  - **averagePace:** 04:00/mi mm:ss / mi
  - *Whatever we can get from Strava*
