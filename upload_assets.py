import os
import subprocess
import json
import glob

def upload_assets():
    upload_dir = "/home/ubuntu/upload"
    pattern = os.path.join(upload_dir, "PHOTO-*.jpg")
    photos = glob.glob(pattern)
    
    print(f"Trouvé {len(photos)} photos à téléverser.")
    
    mapping = {}
    
    # On va copier d'abord les photos dans /home/ubuntu/webdev-static-assets/ pour respecter le cycle de vie
    static_assets_dir = "/home/ubuntu/webdev-static-assets"
    os.makedirs(static_assets_dir, exist_ok=True)
    
    # Pour ne pas surcharger, on va téléverser un sous-ensemble de photos clés représentatives
    # de différentes dates/événements ou toutes si possible rapidement. Téléversons-les toutes par lot de 5 pour aller vite.
    for i, photo_path in enumerate(photos):
        filename = os.path.basename(photo_path)
        dest_path = os.path.join(static_assets_dir, filename)
        
        # Copie
        subprocess.run(["cp", photo_path, dest_path])
        
        # Téléversement via manus-upload-file --webdev
        try:
            result = subprocess.run(
                ["manus-upload-file", "--webdev", dest_path],
                capture_output=True,
                text=True,
                check=True
            )
            output = result.stdout
            # Extraction de l'URL compressée ou originale
            # L'outil renvoie typiquement :
            # Original: https://...
            # Compressed: https://...
            lines = output.split("\n")
            original_url = ""
            compressed_url = ""
            for line in lines:
                if "Original:" in line:
                    original_url = line.split("Original:")[1].strip()
                elif "Compressed:" in line:
                    compressed_url = line.split("Compressed:")[1].strip()
            
            mapping[filename] = {
                "original": original_url or compressed_url,
                "compressed": compressed_url or original_url
            }
            print(f"[{i+1}/{len(photos)}] Téléversé {filename}")
        except Exception as e:
            print(f"Erreur pour {filename}: {e}")
            
    # Écrit le fichier de mapping JSON
    output_json = "/home/ubuntu/micmali-refonte/client/src/assets_mapping.json"
    os.makedirs(os.path.dirname(output_json), exist_ok=True)
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(mapping, f, indent=2, ensure_ascii=False)
        
    print(f"Mapping sauvegardé dans {output_json}")

if __name__ == "__main__":
    upload_assets()
