describe('jackpot', function()
{
    beforeEach(function() {
        //create a simulation div to use for the tests
        let mydom = '<div id="mydom"><h1 id="message">Hello</h1><input id="num1" type="text"> <input id="num2" type="text"> <input id="magicbutton" type="button" value="Magic Button">Jackpot: <span id="jackpot" /></div>';

        document.body.insertAdjacentHTML(
            'afterbegin',
            mydom);
    });

    // remove the html fixture from the DOM to avoid duplicated elements
    afterEach(function() {
        document.body.removeChild(document.getElementById('mydom'));
    });
    // to register DOM elements and the event listeners
    beforeEach(function() {
        window.jackpot.init();
    });
    it('expected jackpot for 2 and 5 is 47.25', function() {
        document.getElementById('num1').value = 2;
        document.getElementById('num2').value = 5;
        document.getElementById('magicbutton').click();
        expect(document.getElementById('jackpot').innerHTML).toBe('47.25');
    });
    it('Expecting Hello world from message', function() {
        expect(document.getElementById('message').innerHTML).toBe('Hello');
    });
    it('Expecting winning on keydown', function () {
        // document.getElementById('num1').focus();
        document.getElementById('num1').dispatchEvent(new Event('keydown'));
        expect(document.getElementById('jackpot').innerHTML).toBe('Winning');
    });
    it('expected jackpot for 1 and 2 is 9', function() {
        document.getElementById('num1').value = 1;
        document.getElementById('num2').value = 2;
        document.getElementById('magicbutton').click();
        expect(document.getElementById('jackpot').innerHTML).toBe('13.5');
    });
    it('expected jackpot for y(any non number) and 10(number) is Jackpot Missed', function() {
        document.getElementById('num1').value = 'y';
        document.getElementById('num2').value = 10;
        document.getElementById('magicbutton').click();
        expect(document.getElementById('jackpot').innerHTML).toBe('Jackpot Missed');
    });


    it('Expecting "" on keyup', function () {
        // document.getElementById('num1').focus();
        document.getElementById('num1').dispatchEvent(new Event('keyup'));
        expect(document.getElementById('jackpot').innerHTML).toBe('');
    });
});