<script>
    $("div.feup-pure-control-group:eq(0)").after("<h5></h5>");
</script>

<script>
    $("h5").first().addClass("repeat-email-label");
</script>

<script>
    $(".ewd-feup-text-input").first().addClass("email-1");
</script>

<script>
    $(".repeat-email-label").append('<div class="feup-pure-control-group">

            <
            label
            for = "Username"
            id = "ewd-feup-register-username-div"
            class = "ewd-feup-field-label" > Confirm Email:

            <
            span class = "req-symbol" > * < /span>

            <
            /label><input type="email" class="ewd-feup-text-input email-2" name="Username" placeholder="Confirm Email...">

            <
            /div>

            <
            h6 class = "email-wrong" > < /h6>');
</script>

<script>
    function checkPasswordMatch() {

        var password = $(".email-1").val();

        var confirmPassword = $(".email-2").val();

        if (password != confirmPassword)

            $(".email-wrong").html("Emails do not match!");
        else
            $(".email-wrong").html("");
    }
    $(document).ready(function() {
        $(".email-2").keyup(checkPasswordMatch);
    });
</script>
<script>
    $("div.feup-pure-control-group:eq(5)").first().addClass("signup-2nd-group");
</script>
<script>
    $("div.feup-pure-control-group:eq(15)").first().addClass("signup-2nd-group");
</script>
<script>
    $("div.feup-pure-control-group:eq(20)").first().addClass("signup-2nd-group");
</script>