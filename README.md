1. 先上 swagger 試用 API, 確認 API 使用方法與使用範圍

2. 以較為熟悉的 SPA 作為這次的工具來完成需求 (create react app)

3. 然後在一開始不久便也把 redux 跟 react-router 這些比較架構性的東西先建立起來

4. 因為發現 API 需要使用 proxy server 來使用, 這部分較為不熟, 因此延後使用 API, 先改用 dummy API 把畫面給呈現出來

5. 先做 1.卡片 component 2.列表 RWD 3. 詳細頁 RWD 4. 功能按鈕

6. 使用 node 做出 proxy server 並部屬到 GCP

7. 處理列表頁的 infinite scroll

8. 本來要處理巨量列表視窗化, 但使用後發現套件沒有預期的快速 (套下去就結束了), 考量到時間與效能暫時沒明顯降低, 因此先作罷

9. 處理 user 直接透過 url/:id 進入後的資料處理 => 採用強迫取分的方式: 不停的 load 資料進來直到找到這筆資料, 如果全部 load 完了但是依然沒有這筆資料, 便導回列表頁

10. 檢查並整理 code
