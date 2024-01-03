import os
import json

def create_js_for_folder(path):
    """ Recursively creates a dictionary with the folder info """
    
    result = []

    for item in os.listdir(path):
        item_path = os.path.join(path, item)
        is_folder = os.path.isdir(item_path)

        # Dictionary with info about the item
        item_data = {
            "name": item,
            "isFolder": is_folder
        }

        # Recursively add nested folders
        if is_folder:
            item_data["items"] = create_js_for_folder(item_path)

        result.append(item_data)

    return(result)


def generate_js_file(folder_path, output_file):
    """  """
    js_data = create_js_for_folder(folder_path)

    with open(output_file, 'w') as js_file:
        js_file.write("const data = ")
        json.dump(js_data, js_file, indent=2)
        js_file.write(";")
        js_file.write("export default json;")

    print(f"JavaScript file created successfully: {output_file}")



def main():
    folder_path = os.path.join(os.getcwd(), "public/documents")

    if not os.path.exists(folder_path):
        print("Folder path does not exist.")
        return

    output_file = "data.js"

    generate_js_file(folder_path, output_file)

if __name__ == "__main__":
    main()
    