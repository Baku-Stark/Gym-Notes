def success(color: str, message: str):
    """
        Success Message
        ----------
        args:
            color -> string
            message -> string
            end -> str
    """
    print(color + message + '\033[1;41m')

def error(color: str, message: str):
    """
        Fail Message
        ----------
        args:
            color -> string
            message -> string
            end -> str
    """
    
    print(color + message + '\033[1;41m')