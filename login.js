document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // 기본 동작 중단

        const username = loginForm.querySelector("[name='username']").value;
        const password = loginForm.querySelector("[name='password']").value;

        // 실제 로그인 처리를 수행하는 함수 호출
        if (performLogin(username, password)) {
            alert("로그인 성공!");
        } else {
            alert("로그인 실패. 아이디 또는 비밀번호를 확인하세요.");
        }
    });

    function performLogin(username, password) {
        // 여기서 실제 로그인 처리 로직을 구현합니다.
        // 예를 들어, 서버로 요청을 보내고 응답을 처리하는 코드를 추가해야 합니다.
        // 임시로 간단한 예시를 제공합니다. 실제로는 보안 등을 고려해야 합니다.
        const validUsername = "user";
        const validPassword = "pass";

        return username === validUsername && password === validPassword;
    }
});
