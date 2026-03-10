import ContentSection from "@/components/ContentSection";

const CVContent = () => {
  return (
    <div>
      <div id="cv" className="mb-16">
        <h1 className="mb-4">Computer Vision</h1>
        <p className="font-serif text-foreground leading-[1.8] text-base opacity-80">
          De la convolution aux modèles génératifs : classification, segmentation, détection d'objets (YOLO) et Diffusion Models.
        </p>
      </div>

      <div className="section-divider" />

      <ContentSection id="cv-roadmap" title="Roadmap d'Apprentissage">
        <h3 className="mt-8 mb-4">Phase 1 — Fondations Visuelles (Semaines 1–4)</h3>
        <ul className="list-none space-y-2 pl-0">
          <li>Représentation d'une image : pixels, canaux, espaces colorimétriques (RGB, HSV, LAB)</li>
          <li>Opérations classiques : filtrage, convolution, détection de contours (Sobel, Canny)</li>
          <li>OpenCV : lecture, transformation, annotation d'images</li>
          <li>Introduction aux CNNs : convolution, pooling, stride, padding — l'intuition géométrique</li>
          <li>Architectures fondatrices : LeNet, AlexNet, VGG — pourquoi la profondeur compte</li>
        </ul>

        <h3 className="mt-8 mb-4">Phase 2 — Classification Avancée (Semaines 5–8)</h3>
        <ul className="list-none space-y-2 pl-0">
          <li>ResNet et le problème du gradient vanishing — skip connections</li>
          <li>Architectures modernes : EfficientNet, ConvNeXt, Vision Transformers (ViT)</li>
          <li>Transfer Learning : fine-tuner un modèle pré-entraîné sur ImageNet</li>
          <li>Data Augmentation avancée : Albumentations, CutMix, MixUp</li>
          <li>Métriques et évaluation : accuracy, precision, recall, confusion matrix, top-k</li>
        </ul>

        <h3 className="mt-8 mb-4">Phase 3 — Détection et Segmentation (Semaines 9–14)</h3>
        <ul className="list-none space-y-2 pl-0">
          <li>Détection d'objets : les deux familles (two-stage vs one-stage)</li>
          <li>R-CNN → Fast R-CNN → Faster R-CNN : l'évolution architecturale</li>
          <li>YOLO (v5 à v10) : architecture, loss function, anchor-free detection</li>
          <li>Segmentation sémantique : FCN, U-Net, DeepLab</li>
          <li>Segmentation d'instance : Mask R-CNN</li>
          <li>SAM (Segment Anything Model) : fondation models pour la segmentation</li>
          <li>Annotation et datasets : COCO, Pascal VOC, formats (YOLO, COCO JSON)</li>
        </ul>

        <h3 className="mt-8 mb-4">Phase 4 — Modèles Génératifs (Semaines 15–20)</h3>
        <ul className="list-none space-y-2 pl-0">
          <li>GANs : architecture Generator/Discriminator, training dynamics</li>
          <li>Variational Autoencoders (VAEs) : espace latent et reconstruction</li>
          <li>Diffusion Models : le processus de débruitage, DDPM, DDIM</li>
          <li>Stable Diffusion : architecture complète (U-Net, VAE, CLIP text encoder)</li>
          <li>ControlNet, IP-Adapter : contrôle fin de la génération</li>
          <li>Métriques génératives : FID, IS, CLIP Score</li>
          <li>Applications : inpainting, super-résolution, image-to-image</li>
        </ul>
      </ContentSection>

      <div className="section-divider" />

      <ContentSection id="cv-resources" title="Ressources & E-books">
        <h3 className="mt-8 mb-4">Livres Fondamentaux</h3>
        <ul className="list-none space-y-3 pl-0">
          <li><em>Deep Learning for Vision Systems</em> — Mohamed Elgendy (Manning)</li>
          <li><em>Programming Computer Vision with Python</em> — Jan Erik Solem</li>
          <li><em>Computer Vision: Algorithms and Applications</em> — Richard Szeliski (2e édition, en ligne)</li>
          <li><em>Deep Learning</em> — Goodfellow, Bengio, Courville (chapitres CNN)</li>
          <li><em>Generative Deep Learning</em> — David Foster (O'Reilly, 2e édition)</li>
        </ul>

        <h3 className="mt-8 mb-4">Cours Gratuits</h3>
        <ul className="list-none space-y-3 pl-0">
          <li>CS231N: Convolutional Neural Networks for Visual Recognition — Stanford</li>
          <li>Fast.ai — Practical Deep Learning for Coders (parties vision)</li>
          <li>DeepLearning.AI — Convolutional Neural Networks (Coursera)</li>
          <li>Ultralytics YOLO Documentation — docs.ultralytics.com</li>
          <li>Hugging Face Computer Vision Course — huggingface.co/learn/computer-vision-course</li>
        </ul>

        <h3 className="mt-8 mb-4">Documentations Essentielles</h3>
        <ul className="list-none space-y-3 pl-0">
          <li>OpenCV — docs.opencv.org</li>
          <li>PyTorch Vision (torchvision) — pytorch.org/vision</li>
          <li>Hugging Face Diffusers — huggingface.co/docs/diffusers</li>
          <li>Albumentations — albumentations.ai/docs</li>
          <li>Roboflow — docs.roboflow.com (annotation, datasets, déploiement)</li>
        </ul>
      </ContentSection>

      <div className="section-divider" />

      <ContentSection id="cv-projects" title="Projets Pratiques">
        <h3 className="mt-8 mb-4">Projet 1 — Classification d'Images Médicales (Débutant)</h3>
        <p>Construire un classificateur capable de distinguer des radiographies normales et pathologiques. Utiliser transfer learning avec un ResNet50 pré-entraîné. Implémenter les data augmentations appropriées au domaine médical.</p>
        <p className="text-muted-foreground text-sm font-mono mt-2">Technologies : PyTorch, torchvision, Albumentations, Matplotlib</p>

        <h3 className="mt-8 mb-4">Projet 2 — Détection d'Objets en Temps Réel (Intermédiaire)</h3>
        <p>Entraîner un modèle YOLOv8 sur un dataset personnalisé (annoté via Roboflow ou CVAT). Déployer le modèle pour de l'inférence en temps réel sur un flux vidéo. Mesurer le FPS et le mAP.</p>
        <p className="text-muted-foreground text-sm font-mono mt-2">Technologies : Ultralytics YOLOv8, Roboflow, OpenCV, ONNX Runtime</p>

        <h3 className="mt-8 mb-4">Projet 3 — Pipeline Génératif avec Diffusion Models (Expert)</h3>
        <p>Fine-tuner Stable Diffusion avec DreamBooth ou LoRA sur un style visuel spécifique. Implémenter un pipeline avec ControlNet pour de la génération contrôlée (pose, canny edges). Construire une interface web pour tester le modèle.</p>
        <p className="text-muted-foreground text-sm font-mono mt-2">Technologies : Hugging Face Diffusers, ControlNet, LoRA, Gradio, CUDA</p>
      </ContentSection>

      <div className="section-divider" />

      <ContentSection id="cv-exercises" title="Banque d'Exercices">
        <h3 className="mt-8 mb-4">Exercices Théoriques</h3>
        <ul className="list-none space-y-3 pl-0">
          <li>Calculer la taille de sortie d'une couche convolutionnelle donnée (input size, kernel, stride, padding). Expliquer l'impact de chaque paramètre.</li>
          <li>Comparer les architectures two-stage (Faster R-CNN) et one-stage (YOLO). Quels sont les trade-offs en termes de vitesse et précision ?</li>
          <li>Expliquer le processus de diffusion forward et reverse dans un DDPM. Pourquoi ajouter du bruit gaussien progressivement ?</li>
          <li>Qu'est-ce qu'un Feature Pyramid Network (FPN) et pourquoi est-il crucial pour la détection multi-échelle ?</li>
          <li>Décrire comment Segment Anything (SAM) généralise la segmentation. Quelle est son architecture (image encoder, prompt encoder, mask decoder) ?</li>
        </ul>

        <h3 className="mt-8 mb-4">Exercices de Code</h3>
        <div className="code-block mb-4">
          <p className="text-muted-foreground text-xs mb-2"># Exercice 1 : Implémenter une couche convolutionnelle from scratch</p>
          <p>Écrire une fonction NumPy qui applique un kernel 3×3 sur une image en niveaux de gris. Comparer le résultat avec cv2.filter2D().</p>
        </div>
        <div className="code-block mb-4">
          <p className="text-muted-foreground text-xs mb-2"># Exercice 2 : Data Augmentation Pipeline</p>
          <p>Créer un pipeline Albumentations qui applique : rotation aléatoire, flip horizontal, ajustement de luminosité, et CutOut. Visualiser 16 versions augmentées d'une même image.</p>
        </div>
        <div className="code-block mb-4">
          <p className="text-muted-foreground text-xs mb-2"># Exercice 3 : Inférence YOLO + tracking</p>
          <p>Utiliser YOLOv8 pour détecter des objets dans une vidéo. Ajouter un tracker (ByteTrack) pour suivre les objets détectés à travers les frames. Annoter la vidéo de sortie avec les IDs de tracking.</p>
        </div>
      </ContentSection>

      <div className="section-divider" />

      <ContentSection id="cv-veille" title="Veille Technologique">
        <h3 className="mt-8 mb-4">Newsletters</h3>
        <ul className="list-none space-y-3 pl-0">
          <li><em>The Batch</em> — Andrew Ng — Couverture régulière des avancées en vision</li>
          <li><em>Davis Summarizes Papers</em> — YouTube — Résumés visuels des papiers clés</li>
          <li><em>AI Pub</em> — Newsletter focalisée sur les modèles génératifs</li>
          <li><em>Import AI</em> — Jack Clark — Analyse approfondie des tendances IA</li>
        </ul>

        <h3 className="mt-8 mb-4">Blogs & Sources</h3>
        <ul className="list-none space-y-3 pl-0">
          <li>Papers With Code — paperswithcode.com/area/cv</li>
          <li>Ultralytics Blog — ultralytics.com/blog</li>
          <li>Hugging Face Blog — Sections Diffusers et Vision</li>
          <li>Roboflow Blog — blog.roboflow.com — Tutoriels pratiques</li>
          <li>Yannic Kilcher — YouTube — Explications détaillées de papiers CV</li>
        </ul>
      </ContentSection>
    </div>
  );
};

export default CVContent;
