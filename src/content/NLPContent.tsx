import ContentSection from "@/components/ContentSection";

const NLPContent = () => {
  return (
    <div>
      <div id="nlp" className="mb-16">
        <h1 className="mb-4">Natural Language Processing</h1>
        <p className="font-serif text-foreground leading-[1.8] text-base opacity-80">
          Un parcours structuré du pré-traitement de texte aux architectures de pointe : LLMs, Fine-tuning, RAG et Embeddings.
        </p>
      </div>

      <div className="section-divider" />

      <ContentSection id="nlp-roadmap" title="Roadmap d'Apprentissage">
        <h3 className="mt-8 mb-4">Phase 1 — Fondations (Semaines 1–4)</h3>
        <ul className="list-none space-y-2 pl-0">
          <li>Pré-traitement de texte : tokenization, stemming, lemmatisation</li>
          <li>Représentations vectorielles classiques : TF-IDF, Bag of Words</li>
          <li>Modèles classiques : Naive Bayes, SVM pour la classification de texte</li>
          <li>Introduction à SpaCy et NLTK</li>
          <li>Word Embeddings : Word2Vec, GloVe — comprendre la géométrie sémantique</li>
        </ul>

        <h3 className="mt-8 mb-4">Phase 2 — Architectures Séquentielles (Semaines 5–8)</h3>
        <ul className="list-none space-y-2 pl-0">
          <li>Réseaux récurrents : RNN, LSTM, GRU — pourquoi ils existent, pourquoi ils échouent</li>
          <li>Mécanisme d'attention (Bahdanau, Luong) — l'intuition avant les formules</li>
          <li>Seq2Seq et applications : traduction automatique, résumé</li>
          <li>Embeddings contextuels : ELMo comme pont vers les Transformers</li>
        </ul>

        <h3 className="mt-8 mb-4">Phase 3 — Transformers et Pré-entraînement (Semaines 9–14)</h3>
        <ul className="list-none space-y-2 pl-0">
          <li>L'architecture Transformer : "Attention Is All You Need" — lecture ligne par ligne</li>
          <li>BERT : pré-entraînement bidirectionnel, masked language modeling</li>
          <li>GPT : modèles autorégressifs et génération de texte</li>
          <li>T5, BART : modèles encoder-decoder unifiés</li>
          <li>Hugging Face Transformers : pipeline, tokenizer, model — maîtrise de l'API</li>
        </ul>

        <h3 className="mt-8 mb-4">Phase 4 — LLMs, Fine-tuning et RAG (Semaines 15–20)</h3>
        <ul className="list-none space-y-2 pl-0">
          <li>Scaling Laws et émergence des LLMs (GPT-3/4, LLaMA, Mistral)</li>
          <li>Fine-tuning efficace : LoRA, QLoRA, PEFT — ajuster sans tout recalculer</li>
          <li>Instruction tuning et RLHF — aligner un modèle sur l'intention humaine</li>
          <li>Embeddings avancés : sentence-transformers, recherche sémantique</li>
          <li>RAG (Retrieval Augmented Generation) : architecture complète avec vector stores (FAISS, ChromaDB, Pinecone)</li>
          <li>Évaluation des LLMs : perplexité, benchmarks (MMLU, HellaSwag), évaluation humaine</li>
          <li>Déploiement : vLLM, TGI, quantisation (GPTQ, AWQ)</li>
        </ul>
      </ContentSection>

      <div className="section-divider" />

      <ContentSection id="nlp-resources" title="Ressources & E-books">
        <h3 className="mt-8 mb-4">Livres Fondamentaux</h3>
        <ul className="list-none space-y-3 pl-0">
          <li><em>Speech and Language Processing</em> — Jurafsky & Martin (3e édition, draft en ligne)</li>
          <li><em>Natural Language Processing with Transformers</em> — Tunstall, von Werra, Wolf (O'Reilly)</li>
          <li><em>Foundations of Statistical Natural Language Processing</em> — Manning & Schütze</li>
          <li><em>Deep Learning</em> — Goodfellow, Bengio, Courville (chapitres sur les séquences)</li>
          <li><em>Build a Large Language Model (From Scratch)</em> — Sebastian Raschka (2024)</li>
        </ul>

        <h3 className="mt-8 mb-4">Cours Gratuits</h3>
        <ul className="list-none space-y-3 pl-0">
          <li>CS224N: Natural Language Processing with Deep Learning — Stanford (vidéos YouTube)</li>
          <li>Hugging Face NLP Course — huggingface.co/learn/nlp-course</li>
          <li>Fast.ai — Practical Deep Learning, Part 2 (NLP sections)</li>
          <li>DeepLearning.AI — Generative AI with LLMs (Coursera)</li>
          <li>LLM University — Cohere (cohere.com/llmu)</li>
        </ul>

        <h3 className="mt-8 mb-4">Documentations Essentielles</h3>
        <ul className="list-none space-y-3 pl-0">
          <li>Hugging Face Transformers — huggingface.co/docs/transformers</li>
          <li>PyTorch — pytorch.org/docs (Tutoriaux NLP inclus)</li>
          <li>LangChain — python.langchain.com/docs</li>
          <li>LlamaIndex — docs.llamaindex.ai</li>
          <li>SpaCy — spacy.io/usage</li>
        </ul>
      </ContentSection>

      <div className="section-divider" />

      <ContentSection id="nlp-projects" title="Projets Pratiques">
        <h3 className="mt-8 mb-4">Projet 1 — Analyse de Sentiment (Débutant)</h3>
        <p>Construire un classificateur de sentiment sur des critiques de films (IMDB dataset). Comparer une approche TF-IDF + Logistic Regression avec un modèle fine-tuné DistilBERT.</p>
        <p className="text-muted-foreground text-sm font-mono mt-2">Technologies : Python, Scikit-learn, Hugging Face, Pandas</p>

        <h3 className="mt-8 mb-4">Projet 2 — Chatbot RAG (Intermédiaire)</h3>
        <p>Construire un chatbot capable de répondre à des questions sur une base documentaire technique (PDF, Markdown). Implémenter le pipeline complet : ingestion de documents, chunking, embeddings, stockage vectoriel, retrieval, et génération via un LLM.</p>
        <p className="text-muted-foreground text-sm font-mono mt-2">Technologies : LangChain ou LlamaIndex, ChromaDB/FAISS, OpenAI API ou Mistral, Streamlit</p>

        <h3 className="mt-8 mb-4">Projet 3 — Fine-tuning d'un LLM Spécialisé (Expert)</h3>
        <p>Fine-tuner un modèle LLaMA ou Mistral 7B sur un dataset spécifique (médical, juridique, ou code) en utilisant QLoRA. Évaluer les performances avant/après fine-tuning. Déployer le modèle avec vLLM et créer une API REST.</p>
        <p className="text-muted-foreground text-sm font-mono mt-2">Technologies : Hugging Face PEFT, BitsAndBytes, vLLM, FastAPI, Weights & Biases</p>
      </ContentSection>

      <div className="section-divider" />

      <ContentSection id="nlp-exercises" title="Banque d'Exercices">
        <h3 className="mt-8 mb-4">Exercices Théoriques</h3>
        <ul className="list-none space-y-3 pl-0">
          <li>Expliquer mathématiquement le mécanisme de self-attention. Pourquoi diviser par √d_k ?</li>
          <li>Comparer les approches encoder-only (BERT), decoder-only (GPT), et encoder-decoder (T5). Dans quels cas utiliser chacune ?</li>
          <li>Qu'est-ce que le "catastrophic forgetting" dans le contexte du fine-tuning ? Comment LoRA adresse-t-il ce problème ?</li>
          <li>Décrire l'architecture complète d'un système RAG. Identifier les points de défaillance possibles.</li>
          <li>Expliquer la différence entre token embeddings, positional embeddings et sentence embeddings.</li>
        </ul>

        <h3 className="mt-8 mb-4">Exercices de Code</h3>
        <div className="code-block mb-4">
          <p className="text-muted-foreground text-xs mb-2"># Exercice 1 : Implémenter self-attention from scratch</p>
          <p>Écrire une fonction Python qui prend une séquence de vecteurs et calcule l'attention scaled dot-product sans utiliser de bibliothèque ML. Uniquement NumPy.</p>
        </div>
        <div className="code-block mb-4">
          <p className="text-muted-foreground text-xs mb-2"># Exercice 2 : Pipeline Hugging Face</p>
          <p>Charger un modèle BERT pré-entraîné, tokenizer un texte, extraire les embeddings de la couche [CLS], et les utiliser pour calculer la similarité cosinus entre deux phrases.</p>
        </div>
        <div className="code-block mb-4">
          <p className="text-muted-foreground text-xs mb-2"># Exercice 3 : Construire un index vectoriel</p>
          <p>Indexer 1000 paragraphes de Wikipedia dans FAISS en utilisant sentence-transformers. Implémenter une recherche sémantique qui retourne les 5 passages les plus pertinents pour une requête donnée.</p>
        </div>
      </ContentSection>

      <div className="section-divider" />

      <ContentSection id="nlp-veille" title="Veille Technologique">
        <h3 className="mt-8 mb-4">Newsletters</h3>
        <ul className="list-none space-y-3 pl-0">
          <li><em>The Batch</em> — Andrew Ng (deeplearning.ai) — Synthèse hebdomadaire des avancées IA</li>
          <li><em>NLP News</em> — Sebastian Ruder — Le plus rigoureux sur les publications NLP</li>
          <li><em>Ahead of AI</em> — Sebastian Raschka — Deep dives techniques sur les LLMs</li>
          <li><em>The Gradient</em> — Articles de fond sur la recherche en ML/NLP</li>
        </ul>

        <h3 className="mt-8 mb-4">Blogs & Sources</h3>
        <ul className="list-none space-y-3 pl-0">
          <li>Hugging Face Blog — huggingface.co/blog</li>
          <li>Lil'Log — lilianweng.github.io — Synthèses techniques exceptionnelles</li>
          <li>Jay Alammar — jalammar.github.io — Visualisations des Transformers</li>
          <li>Papers With Code — paperswithcode.com/area/nlp</li>
          <li>arXiv Sanity — arxiv-sanity-lite.com — Filtrer les publications pertinentes</li>
        </ul>
      </ContentSection>
    </div>
  );
};

export default NLPContent;
