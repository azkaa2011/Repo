document.addEventListener('keydown', function (event) {
    // Daftar shortcut yang ingin diblokir
    const blockedShortcuts = [
        "F12",
        "Ctrl+Shift+I", "Cmd+Option+I",
        "Ctrl+Shift+J", "Cmd+Option+J",
        "Ctrl+Shift+C", "Cmd+Shift+C",
        "Ctrl+Shift+P", "Cmd+Shift+P",
        "Ctrl+Shift+M", "Cmd+Shift+M",
        "Ctrl+U", "Cmd+Option+U",
        "Shift+U", // Shortcut khusus Shift+U
        "Ctrl+Shift+D", "Cmd+Shift+D",
        "Ctrl+Alt+I", "Cmd+Option+I",
        "Ctrl+Alt+J", "Cmd+Option+J",
        "Ctrl+L", "Cmd+K",
        "Ctrl+Shift+E", "Cmd+Shift+E",
        "Ctrl+Shift+O", "Cmd+Shift+O",
        "Ctrl+Shift+N", "Cmd+Shift+N",
        "Ctrl+Shift+S", "Cmd+Shift+S",
        "Ctrl+Alt+F", "Cmd+Option+F",
        "Ctrl+[", "Ctrl+]",
        "Alt+ArrowRight", "Alt+ArrowLeft",
        "Ctrl+Shift+Tab", "Ctrl+Tab",
        "Shift+Tab",
        "Ctrl+Shift+8",
        "Ctrl+Alt+ArrowUp", "Ctrl+Alt+ArrowDown",
        "Ctrl+Alt+H", "Cmd+Option+H",
        "Ctrl+Shift+B",
        "Ctrl+Shift+R", "Cmd+Shift+R",
        "Ctrl+Shift+L"
    ];

    // Helper function to generate the combination string
    function getKeyCombination(event) {
        let keys = [];
        if (event.ctrlKey || event.metaKey) keys.push("Ctrl");
        if (event.shiftKey) keys.push("Shift");
        if (event.altKey) keys.push("Alt");
        keys.push(event.key.toUpperCase());
        return keys.join("+");
    }

    // Get the current key combination
    const currentShortcut = getKeyCombination(event);

    // Check if the shortcut is blocked
    if (blockedShortcuts.includes(currentShortcut)) {
        console.log(`Shortcut ${currentShortcut} diblokir.`); // Log jika ingin debug
        event.preventDefault();
        event.stopPropagation();
    }
});
